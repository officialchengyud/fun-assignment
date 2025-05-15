// Used to help shorten the number when displaying so that it fits inside card
export function roundValue(value: number) {
  const suffixes = ["", "K", "M", "B", "T"];
  let index = 0;

  while (value >= 1000 && index < suffixes.length - 1) {
    value /= 1000;
    index++;
  }
  const rounded = Number((Math.round(value * 10_000) / 10_000).toString());
  return `${rounded}${suffixes[index]}`;
}

// This is used for rounding the unit prices and purely for aesthetics when displaying
// If the unit price is a decimal, then we retain 4 s.f
// If the unit price is more than 1, then we retain 6 decimal places
export function formatUnitPrice(value: number) {
  if (value === 0) return "0";

  const absValue = Math.abs(value);

  if (absValue < 1) {
    const rounded = Number(value.toPrecision(4));
    return parseFloat(rounded.toString());
  }

  const rounded = (Math.round(value * 1_000_000) / 1_000_000).toFixed(6);
  return parseFloat(rounded);
}

export function truncate(str: string, maxDigits = 10) {
  return str.length > maxDigits ? str.slice(0, maxDigits) + "..." : str;
}
