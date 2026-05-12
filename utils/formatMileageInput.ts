export const formatMileageInput = (value: string) => {
  if (!value) return '';

  return Number(value).toLocaleString('en-US');
};