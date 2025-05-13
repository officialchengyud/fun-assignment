import { Card, CardBody } from "@heroui/react";
import CoinSelect from "../CoinSelect";
import { CoinType } from "@/constants/coins";
import { useState } from "react";
import CurrencyInput from "../CurrencyInput";

const SourceCard = () => {
  const [sourceCoin, setSourceCoin] = useState<CoinType>(CoinType.USDC);

  return (
    <Card className="min-w-[400px]">
      <CardBody>
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">Source</p>
          <CoinSelect value={sourceCoin} onChange={setSourceCoin} />
        </div>
        <div className="flex flex-row gap-2 mt-4 mb-1">
          <p className="font-bold text-5xl">110</p>
          <p className="font-bold text-5xl text-gray-500">{sourceCoin}</p>
        </div>
        <p className="mt-1 mb-4 text-gray-500">1 USD = X USDC</p>
        <CurrencyInput />
      </CardBody>
    </Card>
  );
};

export default SourceCard;
