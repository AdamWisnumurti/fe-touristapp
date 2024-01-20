export const formatNumber = (value: string) => {
  const parts = value.split('').reverse();
  const formattedParts = [];

  for (let i = 0; i < parts.length; i += 1) {
    if (i > 0 && i % 3 === 0) {
      formattedParts.push('.');
    }
    formattedParts.push(parts[i]);
  }

  return formattedParts.reverse().join('');
};

export const handleFormatNumber = (value: string) => {
  let inputValue: string = value;
  // Remove leading zeros except for a zero before a dot
  // if (parseInt(inputValue.includes('.'))) {

  // }
  inputValue = inputValue?.replace(/^0+(?!$|\.)/, '');
  const numericInput = inputValue?.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  const formatted = formatNumber(numericInput);
  return formatted;
};

export const formatCurrency = (value: string | number) => {
  // const val = new Intl.NumberFormat('id-ID').format(value as number);
  const valNumber = new Intl.NumberFormat('id-ID').format(value as number);

  return `${valNumber === 'NaN' ? 0 : valNumber}`;
  // return val;
  // return `Rp. ${val}`;
};

export const formatedToNumber = (value: string) => {
  return Number(String(value?.replace('.', '')));
};
