import { NumberInput } from "@heroui/react";

interface CurrencyInputProps {
  disabled?: boolean;
}

const CurrencyInput = ({ disabled }: CurrencyInputProps) => {
  return (
    <NumberInput
      isDisabled={disabled}
      label="Enter an amount"
      placeholder="0.00"
      size="lg"
      minValue={0}
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">USD</span>
        </div>
      }
    />
  );
};

export default CurrencyInput;
