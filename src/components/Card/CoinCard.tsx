import { Card, CardBody, Divider } from "@heroui/react";
import { useStore } from "@/hooks/useStore";
import { useFormattedAssetValue } from "@/hooks/hooks";
import CoinSelect from "./CoinSelect";
import CurrencyInput from "./CurrencyInput";
import { CoinType } from "@/constants/types";
import CoinValue from "./CoinValue";

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
  const {
    displayValue,
    actualValue,
    rateText,
    lastUpdatedText,
    isLoading,
    error,
  } = useFormattedAssetValue(coin);

  const alignedText = isTarget ? "text-right" : "";
  const rowAlignment = isTarget ? "justify-end" : "";
  const flexRowDirection = isTarget ? "flex-row-reverse" : "";

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
          loading={isLoading}
          rowAlignment={rowAlignment}
          error={error}
          displayValue={displayValue}
          actualValue={actualValue}
          coin={coin}
        />
        <Divider className="mt-4 mb-4" />
        <p className={`mt-1 text-gray-500 ${alignedText}`}>{rateText}</p>
        <p className={`mt-1 text-gray-500 ${alignedText}`}>{lastUpdatedText}</p>
        <Divider className="mt-4 mb-4" />
        <CurrencyInput disabled={inputDisabled} />
      </CardBody>
    </Card>
  );
};

export default CoinCard;
