const defaultState = {
  data: [],
};

export default function search(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_SEARCH_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
