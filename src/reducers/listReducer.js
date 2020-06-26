import { FETCH_LIST_START } from "../actions/listActions";

const initialState = {
  list: [],
  isFetching: false,
  error: "",
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_START:
      return { ...state, list: [], isFetching: false, error: "" };
    default:
      return state;
  }
};

export default listReducer;
