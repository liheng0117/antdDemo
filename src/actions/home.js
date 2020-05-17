export function getData(options) {
  return {
    type: "FETCH_HOME_DATA",
    payload: options,
  };
}
