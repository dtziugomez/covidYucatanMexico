// Filter a given set of countries by name
export const filterCountriesByName = (countries, name) => {
  return countries.filter(c =>
    c.nombre.toLowerCase().includes(name.trim().toLowerCase())
  );
};

/*
 * COMMON HELPERS
 * ----------------
 */

// capitalize first letter
export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
