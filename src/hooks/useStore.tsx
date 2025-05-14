import { CoinType } from "@/constants/coins";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StoreContextType {
  sourceCoin: CoinType;
  setSourceCoin: (coinType: CoinType) => void;
  targetCoin: CoinType | undefined;
  setTargetCoin: (coinType: CoinType) => void;
  currencyValue: number;
  setCurrencyValue: (currencyValue: number) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [sourceCoin, setSourceCoin] = useState<CoinType>(CoinType.USDC);
  const [targetCoin, setTargetCoin] = useState<CoinType>();
  const [currencyValue, setCurrencyValue] = useState<number>(0);

  const value: StoreContextType = {
    sourceCoin,
    setSourceCoin,
    targetCoin,
    setTargetCoin,
    currencyValue,
    setCurrencyValue,
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
