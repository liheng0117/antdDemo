export function getSearch(options) {
  return {
    type: "FETCH_SEARCH_DATA",
    payload: options,
  };
}
