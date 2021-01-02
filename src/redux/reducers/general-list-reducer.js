import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS_SUCCESS,
  RECEIVE_POKEMONS_FAILED,
} from "redux/actions/general-list-actions";
const initialState = {
  total: 0,
  list: [],
  isFetching: true,
};

const generalList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload?.results,
        total: action.payload?.count,
      };
    case RECEIVE_POKEMONS_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default generalList;
