import USDT from "@/assets/USDT.svg";
import USDC from "@/assets/USDC.svg";
import ETH from "@/assets/ETH.svg";
import WBTC from "@/assets/WBTC.svg";
import { CoinType } from "./types";

export const coins = [
  {
    name: CoinType.USDC,
    svg: USDC,
  },
  {
    name: CoinType.USDT,
    svg: USDT,
  },
  {
    name: CoinType.ETH,
    svg: ETH,
  },
  {
    name: CoinType.WBTC,
    svg: WBTC,
  },
];

// If I were to expand on the number of coin offerings,
// then I would either use an existing API to fetch this list
// or expand on this coin type
export const coinDetailMap = {
  [CoinType.USDC]: {
    chainId: "1",
    symbol: "USDC",
  },
  [CoinType.USDT]: {
    chainId: "137",
    symbol: "USDT",
  },
  [CoinType.ETH]: {
    chainId: "8453",
    symbol: "ETH",
  },
  [CoinType.WBTC]: {
    chainId: "1",
    symbol: "WBTC",
  },
};
