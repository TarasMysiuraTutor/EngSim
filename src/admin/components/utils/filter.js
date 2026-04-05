// src/utils/filter.js

export function filterItems(items, category) {
  if (!category || category === "all") return items;
  return items.filter(item => item.category === category);
}