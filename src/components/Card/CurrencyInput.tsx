import { useStore } from "@/hooks/useStore";
import { NumberInput } from "@heroui/react";

interface CurrencyInputProps {
  disabled?: boolean;
}

const CurrencyInput = ({ disabled }: CurrencyInputProps) => {
  const { currencyValue, setCurrencyValue } = useStore();

  return (
    <NumberInput
      isDisabled={disabled}
      label="Enter an amount"
      placeholder="0.00"
      size="lg"
      value={currencyValue}
      onChange={(e) => {
        if (typeof e === "number") return;
        const value = Number(e.target.value.replace(/,/g, ""));
        setCurrencyValue(value);
      }}
      hideStepper
      minValue={0}
      isClearable={!!currencyValue}
      onClear={() => setCurrencyValue(0)}
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small ml-3">USD</span>
        </div>
      }
    />
  );
};

export default CurrencyInput;
