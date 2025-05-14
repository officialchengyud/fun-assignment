import { Card, CardBody } from "@heroui/react";
import CoinSelect from "../CoinSelect";
import CurrencyInput from "../CurrencyInput";
import { useStore } from "@/hooks/useStore";
import { useQuery } from "@tanstack/react-query";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { coinDetailMap } from "@/constants/coins";

const TargetCard = () => {
  const { sourceCoin, targetCoin, setTargetCoin, currencyValue } = useStore();

  const tokenInfo = useQuery({
    queryKey: ["tokenInfo", targetCoin],
    queryFn: () =>
      getAssetErc20ByChainAndSymbol({
        chainId: coinDetailMap[targetCoin!].chainId,
        symbol: coinDetailMap[targetCoin!].symbol,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      }),
    enabled: !!targetCoin,
  });

  const price = useQuery({
    queryKey: ["price", targetCoin],
    queryFn: () =>
      getAssetPriceInfo({
        chainId: tokenInfo.data!.chain,
        assetTokenAddress: tokenInfo.data!.address,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      }),
    enabled: !!tokenInfo.data,
  });

  return (
    <Card className="min-w-[400px] self-stretch">
      <CardBody>
        <div className="flex items-center justify-between">
          <CoinSelect
            filterCoin={sourceCoin}
            value={targetCoin}
            onChange={setTargetCoin}
          />
          <p className="font-bold text-2xl">Target</p>
        </div>
        <p className="mt-4 text-right">{currencyValue} USD ≈</p>
        <div className="flex flex-row gap-2 mb-1 justify-end">
          <p className="font-bold text-5xl">
            {price.data ? currencyValue / price.data?.unitPrice : 0}
          </p>
          <p className="font-bold text-5xl text-gray-500">{targetCoin}</p>
        </div>
        <p className="mt-1 mb-4 text-gray-500 text-right">
          {price.isLoading ? (
            "Loading.. please wait"
          ) : (
            <>
              1 USD = {price.data ? 1 / price.data?.unitPrice : "X"}{" "}
              {targetCoin}
            </>
          )}
        </p>
        <CurrencyInput disabled />
      </CardBody>
    </Card>
  );
};

export default TargetCard;
