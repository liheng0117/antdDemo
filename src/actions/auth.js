export function getUser(options) {
  return {
    type: "FETCH_AUTH_USER",
    payload: options,
  };
}
