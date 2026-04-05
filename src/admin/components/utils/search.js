// src/utils/search.js

export function searchItems(items, query) {
  if (!query || query.trim() === "") return items;

  const q = query.toLowerCase();

  return items.filter(item => {
    const text = JSON.stringify(item).toLowerCase();
    return text.includes(q);
  });
}