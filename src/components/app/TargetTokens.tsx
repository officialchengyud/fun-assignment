import { Button, Card, CardBody } from "@heroui/react";

function TargetTokens() {
  return (
    <Card className="w-fit">
      <CardBody className="flex flex-row gap-2">
        <Button radius="full">USDC</Button>
        <Button radius="full">USDT</Button>
        <Button radius="full">ETH</Button>
        <Button radius="full">WBTC</Button>
      </CardBody>
    </Card>
  );
}

export default TargetTokens;
