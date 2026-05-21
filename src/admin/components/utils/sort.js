// src/utils/sort.js admin panel
//  * Supports:
//  *  - id
//  *  - title (multi-language)
//  *  - pages
//  *  - category
//  *  - date
//  *  - custom fields
//  */

export function sortItems(items, sortBy = "id") {
  const arr = [...items];

  // Helper: extract multilingual text safely
  const getLocalized = (obj) => {
    if (!obj) return "";
    return (
      obj.en ||
      obj.uk ||
      obj.ru ||
      obj.de ||
      "" // fallback
    );
  };

  switch (sortBy) {

    // ---------------------------
   
    // ---------------------------
    case "id":
      return arr.sort((a, b) => (a.id || 0) - (b.id || 0));

    // ---------------------------
   
    // ---------------------------
    case "title":
      return arr.sort((a, b) =>
        getLocalized(a.title).localeCompare(getLocalized(b.title))
      );

    // ---------------------------
   
    // ---------------------------
    case "pages":
      return arr.sort(
        (a, b) => Number(a.pages || 0) - Number(b.pages || 0)
      );

    // ---------------------------
   
    // ---------------------------
    case "category":
      return arr.sort((a, b) =>
        (a.category || "").localeCompare(b.category || "")
      );

    // ---------------------------
   
    // ---------------------------
    case "date":
      return arr.sort((a, b) => {
        const da = new Date(a.date || "1970-01-01");
        const db = new Date(b.date || "1970-01-01");
        return da - db;
      });

    // ---------------------------
   
    // ---------------------------
    case "firstResource":
      return arr.sort((a, b) => {
        const ra = a.resources?.[0]?.name?.en || "";
        const rb = b.resources?.[0]?.name?.en || "";
        return ra.localeCompare(rb);
      });

    // ---------------------------
   
    // ---------------------------
    default:
      // If object has a simple sortable field — try to sort by it
      if (arr.length > 0 && arr[0][sortBy] !== undefined) {
        return arr.sort((a, b) => {
          const av = a[sortBy];
          const bv = b[sortBy];

          // numeric
          if (!isNaN(av) && !isNaN(bv)) return Number(av) - Number(bv);

          // string
          return String(av || "").localeCompare(String(bv || ""));
        });
      }

      // If nothing matched — return unchanged
      return arr;
  }
}


