import { CoinType } from "@/constants/coins";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StoreContextType {
  sourceCoin: CoinType;
  setSourceCoin: (coinType: CoinType) => void;
  targetCoin: CoinType | undefined;
  setTargetCoin: (coinType: CoinType) => void;
  currencyValue: number;
  setCurrencyValue: (currencyValue: number) => void;
  swapCoins: () => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [sourceCoin, setSourceCoin] = useState<CoinType>(CoinType.USDC);
  const [targetCoin, setTargetCoin] = useState<CoinType>();
  const [currencyValue, setCurrencyValue] = useState<number>(0);

  function swapCoins() {
    if (sourceCoin && targetCoin) {
      setSourceCoin(targetCoin);
      setTargetCoin(sourceCoin);
    }
  }

  const value: StoreContextType = {
    sourceCoin,
    setSourceCoin,
    targetCoin,
    setTargetCoin,
    currencyValue,
    setCurrencyValue,
    swapCoins,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
