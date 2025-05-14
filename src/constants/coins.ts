export enum CoinType {
  USDC = "USDC",
  USDT = "USDT",
  ETH = "ETH",
  WBTC = "WBTC",
}

export const coins = [
  {
    name: CoinType.USDC,
  },
  {
    name: CoinType.USDT,
  },
  {
    name: CoinType.ETH,
  },
  {
    name: CoinType.WBTC,
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
