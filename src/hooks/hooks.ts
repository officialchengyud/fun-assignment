import { coinDetailMap, CoinType } from "@/constants/coins";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Let's automatically re-fetch the asset price info every 15s.
const REFETCH_INTERVAL = 15000;

export function useAssetPrice(coinType: CoinType | undefined) {
  const [lastFetched, setLastFetched] = useState(Date.now());
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
    queryFn: () => {
      setLastFetched(Date.now());
      return getAssetPriceInfo({
        chainId: tokenInfo.data!.chain,
        assetTokenAddress: tokenInfo.data!.address,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
      });
    },
    refetchInterval: REFETCH_INTERVAL,
    enabled: !!tokenInfo.data,
  });
  return {
    price: price.data,
    isLoading: tokenInfo.isFetching || price.isFetching,
    lastFetched,
  };
}
