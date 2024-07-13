export default function validFilters(filters = {}) {
  const validFilters = {};
  for (const key in filters) {
    if (Object.hasOwnProperty.call(filters, key) && filters[key]) {
      validFilters[key] = filters[key];
    }
  }

  return validFilters;
}
