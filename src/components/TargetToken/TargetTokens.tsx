import { coins } from "@/constants/coins";
import { useStore } from "@/hooks/useStore";
import { Button, Card, CardBody } from "@heroui/react";
import CoinItem from "../Card/CoinItem";

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
              variant="light"
            >
              <CoinItem name={coin.name} svg={coin.svg} />
            </Button>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default TargetTokens;
