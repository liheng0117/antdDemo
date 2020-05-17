const defaultState = {
  data: [],
};

export default function home(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_HOME_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
