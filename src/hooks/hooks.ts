import { coinDetailMap } from "@/constants/coins";
import { CoinType } from "@/constants/types";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { addToast } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useStore } from "./useStore";
import { formatUnitPrice, roundValue, truncate } from "@/utils/helper";
import moment from "moment";

// Let's automatically re-fetch the asset price info every 15s.
const REFETCH_INTERVAL = 15000;

export function useAssetPrice(coinType: CoinType | undefined) {
  const [lastFetched, setLastFetched] = useState(Date.now());
  const [error, setError] = useState(false);

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
    queryFn: ({ signal }) => {
      setLastFetched(Date.now());
      return getAssetPriceInfo({
        chainId: tokenInfo.data!.chain,
        assetTokenAddress: tokenInfo.data!.address,
        apiKey: import.meta.env.VITE_FUN_API_KEY,
        signal,
      });
    },
    refetchInterval: REFETCH_INTERVAL,
    enabled: !!tokenInfo.data,
  });
  useEffect(() => {
    if (tokenInfo.error || price.error) {
      setError(true);
      addToast({
        title: "An error has occured",
        description:
          // The error could be from the price request or token info request
          price.error?.message ??
          tokenInfo.error?.message ??
          "An unknown error occurred.",
        color: "danger",
      });
    } else {
      setError(false);
    }
  }, [tokenInfo.error, price.error]);

  return {
    price: price.data,
    isLoading: tokenInfo.isFetching || price.isFetching,
    lastFetched,
    error,
  };
}

interface FormattedAssetValue {
  displayValue?: string;
  actualValue?: string;
  rateText: string;
  lastUpdatedText: string;
  isLoading: boolean;
  error: boolean;
}

export const useFormattedAssetValue = (
  coin?: CoinType
): FormattedAssetValue => {
  const { currencyValue } = useStore();
  const { price, isLoading, lastFetched, error } = useAssetPrice(coin);

  let displayValue =
    price?.unitPrice && currencyValue
      ? truncate(roundValue(currencyValue / price.unitPrice))
      : "0";
  if (!coin) displayValue = "";

  const actualValue =
    price?.unitPrice && currencyValue
      ? `${currencyValue / price.unitPrice} ${coin}`
      : undefined;

  let rateText = "Loading.. please wait";
  // i don't like nested ternary so im doing it this way
  if (!isLoading) {
    rateText =
      price?.unitPrice && coin
        ? `1 USD = ${formatUnitPrice(1 / price.unitPrice)} ${coin}`
        : "1 USD = X";
  }

  const lastUpdatedText =
    coin && lastFetched
      ? `Last updated at ${moment(lastFetched).format("hh:mm:ss a")} (${moment(
          lastFetched
        ).fromNow()})`
      : "-";

  return {
    displayValue,
    actualValue,
    rateText,
    lastUpdatedText,
    isLoading,
    error,
  };
};
