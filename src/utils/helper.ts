export function roundValue(value: number) {
  if (value === 0) return "0";
  if (!Number.isInteger(value)) {
    return Number.parseFloat(value.toPrecision(2)).toString();
  } else {
    return value.toFixed(4).replace(/\.?0+$/, "");
  }
}
