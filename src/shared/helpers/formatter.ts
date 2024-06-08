export function formatPrice(amount:number) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return `${formatter.format(amount)} ₸`;
}
