import SwapButton from "../SwapButton";
import SourceCard from "./SourceCard";
import TargetCard from "./TargetCard";
import TargetTokens from "./TargetTokens";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h1 className="text-center font-bold text-3xl">Token Price Explorer</h1>
      <TargetTokens />
      <div className="flex flex-row items-center gap-20">
        <SourceCard />
        <SwapButton />
        <TargetCard />
      </div>
    </div>
  );
};

export default App;
