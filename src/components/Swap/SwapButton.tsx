import { useStore } from "@/hooks/useStore";
import { Button } from "@heroui/react";

const SwapButton = () => {
  const { swapCoins, targetCoin } = useStore();

  return (
    <Button
      isIconOnly
      aria-label="Swap"
      variant="faded"
      onPress={swapCoins}
      disabled={!targetCoin}
    >
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16.5L17 16.5M4 16.5L8.33333 21M4 16.5L8.33333 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default SwapButton;
