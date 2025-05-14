import { Card, CardBody, Divider, Spinner, Tooltip } from "@heroui/react";
import { useStore } from "@/hooks/useStore";
import { useAssetPrice } from "@/hooks/hooks";
import { formatUnitPrice, roundValue, truncate } from "@/utils/helper";
import CoinSelect from "./CoinSelect";
import CurrencyInput from "./CurrencyInput";
import { CoinType } from "@/constants/coins";
import moment from "moment";

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
  const { price, isLoading, lastFetched } = useAssetPrice(coin);

  const alignedText = isTarget ? "text-right" : "";
  const rowAlignment = isTarget ? "justify-end" : "";

  const rateText =
    price?.unitPrice && coin
      ? `1 USD = ${formatUnitPrice(1 / price.unitPrice)} ${coin}`
      : "1 USD = X";

  return (
    <Card className="min-w-[400px] self-stretch">
      <CardBody>
        <div className="flex items-center justify-between">
          {isTarget ? (
            <>
              <CoinSelect
                filterCoin={filterCoin}
                value={coin}
                onChange={setCoin}
              />
              <p className="font-bold text-2xl">{label}</p>
            </>
          ) : (
            <>
              <p className="font-bold text-2xl">{label}</p>
              <CoinSelect
                filterCoin={filterCoin}
                value={coin}
                onChange={setCoin}
              />
            </>
          )}
        </div>
        <p className={`mt-4 ${alignedText}`}>{currencyValue} USD ≈</p>
        <div className={`flex flex-row gap-2 mb-1 ${rowAlignment}`}>
          {!price && isLoading && <Spinner variant="wave" />}
          <Tooltip
            placement="bottom"
            content={price && `${currencyValue / price.unitPrice} ${coin}`}
            showArrow={true}
          >
            <p className="font-bold text-5xl h-14">
              {price?.unitPrice &&
                truncate(roundValue(currencyValue / price.unitPrice))}
            </p>
          </Tooltip>
          <p className="font-bold text-5xl text-gray-500">
            {coin ?? "Select Coin"}
          </p>
        </div>
        <Divider className="mt-4 mb-4" />
        <p className={`mt-1 text-gray-500 ${alignedText}`}>
          {isLoading ? "Loading.. please wait" : rateText}
        </p>
        <p className={`mt-1 text-gray-500 ${alignedText}`}>
          {!coin
            ? "-"
            : `Last updated ${moment(lastFetched).format("hh:mm:ss a")}`}
        </p>
        <Divider className="mt-4 mb-4" />
        <CurrencyInput disabled={inputDisabled} />
      </CardBody>
    </Card>
  );
};

export default CoinCard;
