import USDT from "@/assets/USDT.svg";
import USDC from "@/assets/USDC.svg";
import ETH from "@/assets/ETH.svg";
import WBTC from "@/assets/WBTC.svg";

export enum CoinType {
  USDC = "USDC",
  USDT = "USDT",
  ETH = "ETH",
  WBTC = "WBTC",
}

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
