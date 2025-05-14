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

const SourceCard = () => {
  const { targetCoin, sourceCoin, setSourceCoin, currencyValue } = useStore();

  const tokenInfo = useQuery({
    queryKey: ["tokenInfo", sourceCoin],
    queryFn: () =>
      getAssetErc20ByChainAndSymbol({
        chainId: coinDetailMap[sourceCoin].chainId,
        symbol: coinDetailMap[sourceCoin].symbol,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      }),
  });

  const price = useQuery({
    queryKey: ["price", sourceCoin],
    queryFn: () =>
      getAssetPriceInfo({
        chainId: tokenInfo.data!.chain,
        assetTokenAddress: tokenInfo.data!.address,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      }),
    enabled: !!tokenInfo.data,
  });

  return (
    <Card className="min-w-[400px]">
      <CardBody>
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">Source</p>
          <CoinSelect
            filterCoin={targetCoin}
            value={sourceCoin}
            onChange={setSourceCoin}
          />
        </div>
        <p className="mt-4">{currencyValue} USD ≈</p>
        <div className="flex flex-row gap-2 mb-1">
          <p className="font-bold text-5xl">
            {price.data ? currencyValue / price.data?.unitPrice : 0}
          </p>
          <p className="font-bold text-5xl text-gray-500">{sourceCoin}</p>
        </div>
        <p className="mt-1 mb-4 text-gray-500">
          {price.isLoading ? (
            "Loading.. please wait"
          ) : (
            <>1 USD = {price.data ? 1 / price.data?.unitPrice : "X"} USD</>
          )}
        </p>
        <CurrencyInput />
      </CardBody>
    </Card>
  );
};

export default SourceCard;
