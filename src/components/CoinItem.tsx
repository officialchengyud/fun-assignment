import { Avatar } from "@heroui/react";

interface CoinItemProps {
  name: string;
  svg: string;
}

const CoinItem = ({ name, svg }: CoinItemProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar alt={name} className="flex-shrink-0" size="sm" src={svg} />
      <span className="text-small">{name}</span>
    </div>
  );
};

export default CoinItem;
