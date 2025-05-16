import { useStore } from "@/hooks/useStore";
import CoinCard from "./Card/CoinCard";
import SwapButton from "./Swap/SwapButton";
import TargetTokens from "./TargetToken/TargetTokens";

const App = () => {
  const { targetCoin, sourceCoin, setSourceCoin, setTargetCoin } = useStore();

  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-center font-bold text-3xl">Token Price Explorer</h1>
      <TargetTokens />
      <div className="flex flex-row items-center gap-20">
        <CoinCard
          label="Source"
          coin={sourceCoin}
          setCoin={setSourceCoin}
          filterCoin={targetCoin}
          isTarget={false}
          inputDisabled={false}
        />
        <SwapButton />
        <CoinCard
          label="Target"
          coin={targetCoin}
          setCoin={setTargetCoin}
          filterCoin={sourceCoin}
          isTarget={true}
          inputDisabled={true}
        />
      </div>
    </div>
  );
};

export default App;
