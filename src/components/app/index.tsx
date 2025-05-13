import { Button } from "@heroui/react";
import SourceCard from "./SourceCard";
import TargetCard from "./TargetCard";
import TargetTokens from "./TargetTokens";

const SwapButton = () => {
  return (
    <Button isIconOnly aria-label="Swap" variant="faded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 7.5L8 7.5M21 7.5L16.6667 3M21 7.5L16.6667 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 16.5L17 16.5M4 16.5L8.33333 21M4 16.5L8.33333 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Button>
  );
};

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
