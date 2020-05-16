const defaultState = {
  user: "",
};

export default function home(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_AUTH_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
