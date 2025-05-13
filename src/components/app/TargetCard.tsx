import { Card, CardBody } from "@heroui/react";
import CoinSelect from "../CoinSelect";
import CurrencyInput from "../CurrencyInput";

const TargetCard = () => {
  return (
    <Card className="min-w-[400px] self-stretch">
      <CardBody>
        <div className="flex items-center justify-between">
          <CoinSelect
            value={undefined}
            onChange={(coinType) => console.log(coinType)}
          />
          <p className="font-bold text-2xl">Target</p>
        </div>
        <div className="flex flex-row gap-2  mt-4 mb-1 justify-end">
          <p className="font-bold text-5xl">110</p>
          <p className="font-bold text-5xl text-gray-500">ETH</p>
        </div>
        <p className="mt-1 mb-4 text-gray-500 text-right">1 USD = X ETH</p>
        <CurrencyInput disabled />
      </CardBody>
    </Card>
  );
};

export default TargetCard;
