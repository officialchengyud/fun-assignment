import { coinDetailMap, CoinType } from "@/constants/coins";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { useQuery } from "@tanstack/react-query";

export function useAssetPrice(coinType: CoinType | undefined) {
  const tokenInfo = useQuery({
    queryKey: ["tokenInfo", coinType],
    queryFn: ({ signal }) =>
      getAssetErc20ByChainAndSymbol({
        chainId: coinDetailMap[coinType!].chainId,
        symbol: coinDetailMap[coinType!].symbol,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
        signal,
      }),
    enabled: coinType !== undefined,
  });
  const price = useQuery({
    queryKey: ["price", coinType],
    queryFn: () =>
      getAssetPriceInfo({
        chainId: tokenInfo.data!.chain,
        assetTokenAddress: tokenInfo.data!.address,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      }),
    enabled: !!tokenInfo.data,
  });
  return {
    price: price.data,
    isLoading: tokenInfo.isLoading || price.isLoading,
  };
}
