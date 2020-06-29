// export const API_URL =
//   "https://api.apify.com/v2/key-value-stores/5MeTdsSsl3qzrY0ue/records/LATEST?disableRedirect=1";

const API_URL = process.env.REACT_APP_API_URL;

export const getMunicipios = async () => {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

export const loadLocationsByCountry = async ({ countryCode }) => {
  const res = await fetch(
    `${API_URL}`
  );
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};
