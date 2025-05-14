import { coins, CoinType } from "@/constants/coins";
import { Select, SelectItem } from "@heroui/react";

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
          <div key={coin.key} className="flex items-center gap-2">
            <div className="flex flex-col">
              <span>{coin.data!.name}</span>
            </div>
          </div>
        ));
      }}
    >
      {(coin) => (
        <SelectItem key={coin.name} textValue={coin.name}>
          <div className="flex gap-2 items-center">
            <span className="text-small">{coin.name}</span>
          </div>
        </SelectItem>
      )}
    </Select>
  );
};

export default CoinSelect;
