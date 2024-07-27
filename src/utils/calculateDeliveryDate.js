const MonthsRU = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

export const getValidDateStringRU = (day, month) => {
  // * The month in the Date has an array-like structure, so I don't increment month
  return `${day} ${MonthsRU[month]}`;
};

// * YY/MM/DD
export default function calculateDeliveryDate() {
  const date = new Date();
  return [date.getFullYear(), date.getMonth(), date.getDate() + 1]
}
