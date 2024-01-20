export const CurrencyValue = (value: number) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

export default CurrencyValue;
