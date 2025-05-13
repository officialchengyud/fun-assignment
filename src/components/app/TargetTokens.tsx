import { coins } from "@/constants/coins";
import { Button, Card, CardBody } from "@heroui/react";

function TargetTokens() {
  return (
    <Card className="w-fit">
      <CardBody className="flex flex-row gap-2">
        {coins.map((coin) => {
          return (
            <Button key={coin.name} radius="full">
              {coin.name}
            </Button>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default TargetTokens;
