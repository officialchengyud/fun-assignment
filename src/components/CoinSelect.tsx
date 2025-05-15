import { coins, CoinType } from "@/constants/coins";
import { Select, SelectItem } from "@heroui/react";
import CoinItem from "./CoinItem";

interface CoinSelectProps {
  value: CoinType | undefined;
  onChange: (coinType: CoinType) => void;
  filterCoin?: CoinType;
}

const CoinSelect = ({ value, onChange, filterCoin }: CoinSelectProps) => {
  return (
    <Select
      aria-label="Select Coin"
      classNames={{
        base: "w-36",
        trigger: "h-12",
      }}
      disallowEmptySelection
      items={coins.filter((coin) => filterCoin !== coin.name)}
      selectedKeys={value ? [value] : []}
      onChange={(e) => onChange(e.target.value as CoinType)}
      labelPlacement="outside"
      placeholder="Select Coin"
      renderValue={(coins) => {
        return coins.map((coin) => (
          <CoinItem
            key={coin.key}
            name={coin.data!.name}
            svg={coin.data!.svg}
          />
        ));
      }}
    >
      {(coin) => (
        <SelectItem key={coin.name} textValue={coin.name}>
          <CoinItem name={coin.name} svg={coin.svg} />
        </SelectItem>
      )}
    </Select>
  );
};

export default CoinSelect;
