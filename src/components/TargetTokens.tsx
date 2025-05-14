import { coins } from "@/constants/coins";
import { useStore } from "@/hooks/useStore";
import { Button, Card, CardBody } from "@heroui/react";

function TargetTokens() {
  const { setTargetCoin, sourceCoin } = useStore();

  return (
    <Card className="w-fit">
      <CardBody className="flex flex-row gap-2">
        {coins.map((coin) => {
          return (
            <Button
              key={coin.name}
              onPress={() => setTargetCoin(coin.name)}
              radius="full"
              isDisabled={coin.name === sourceCoin}
            >
              {coin.name}
            </Button>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default TargetTokens;
