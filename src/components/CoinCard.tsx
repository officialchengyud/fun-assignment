import { Card, CardBody, Divider, Spinner, Tooltip } from "@heroui/react";
import { useStore } from "@/hooks/useStore";
import { useAssetPrice } from "@/hooks/hooks";
import { formatUnitPrice, roundValue, truncate } from "@/utils/helper";
import CoinSelect from "./CoinSelect";
import CurrencyInput from "./CurrencyInput";
import { CoinType } from "@/constants/coins";
import moment from "moment";

interface CoinValueProps {
  loading: boolean;
  rowAlignment: string;
  error: boolean;
  actualValue?: string;
  displayValue?: string | number;
  suffix?: string;
}

const CoinValue = ({
  loading,
  rowAlignment,
  error,
  actualValue,
  displayValue,
  suffix = "Select Coin",
}: CoinValueProps) => {
  let value;
  if (loading) {
    value = <Spinner variant="wave" />;
  } else if (error) {
    value = <p className="font-bold text-5xl h-14 text-red-500">ERROR</p>;
  } else {
    value = (
      <Tooltip placement="bottom" content={actualValue} showArrow={true}>
        <p className="font-bold text-5xl h-14">{displayValue}</p>
      </Tooltip>
    );
  }

  return (
    <div className={`flex flex-row gap-2 mb-1 ${rowAlignment}`}>
      {value}
      <p className="font-bold text-5xl text-gray-500">{suffix}</p>
    </div>
  );
};

interface CoinCardProps {
  label: string;
  coin?: CoinType;
  setCoin: (coin: CoinType) => void;
  filterCoin?: CoinType;
  isTarget?: boolean;
  inputDisabled?: boolean;
}

const CoinCard = ({
  label,
  coin,
  setCoin,
  filterCoin,
  isTarget = false,
  inputDisabled = false,
}: CoinCardProps) => {
  const { currencyValue } = useStore();
  const { price, isLoading, lastFetched, error } = useAssetPrice(coin);

  const alignedText = isTarget ? "text-right" : "";
  const rowAlignment = isTarget ? "justify-end" : "";
  const flexRowDirection = isTarget ? "flex-row-reverse" : "";

  const rateText =
    price?.unitPrice && coin
      ? `1 USD = ${formatUnitPrice(1 / price.unitPrice)} ${coin}`
      : "1 USD = X";

  return (
    <Card className="min-w-[500px] self-stretch p-4">
      <CardBody>
        <div
          className={`flex items-center justify-between ${flexRowDirection}`}
        >
          <p className="font-bold text-2xl">{label}</p>
          <CoinSelect filterCoin={filterCoin} value={coin} onChange={setCoin} />
        </div>
        <p className={`mt-4 ${alignedText}`}>{currencyValue} USD ≈</p>
        <CoinValue
          loading={!price && isLoading}
          rowAlignment={rowAlignment}
          error={error}
          displayValue={
            price?.unitPrice &&
            truncate(roundValue(currencyValue / price.unitPrice))
          }
          actualValue={price && `${currencyValue / price.unitPrice} ${coin}`}
          suffix={coin}
        />
        <Divider className="mt-4 mb-4" />
        <p className={`mt-1 text-gray-500 ${alignedText}`}>
          {isLoading ? "Loading.. please wait" : rateText}
        </p>
        <p className={`mt-1 text-gray-500 ${alignedText}`}>
          {!coin
            ? "-"
            : `Last updated ${moment(lastFetched).format(
                "hh:mm:ss a"
              )} (${moment(lastFetched).fromNow()})`}
        </p>
        <Divider className="mt-4 mb-4" />
        <CurrencyInput disabled={inputDisabled} />
      </CardBody>
    </Card>
  );
};

export default CoinCard;
