import {
  REQUEST_POKEMON_TYPES,
  RECEIVE_POKEMON_TYPES_SUCCESS,
  RECEIVE_POKEMON_TYPES_FAILED,
} from "redux/actions/type-list-actions";
const initialState = {
  total: 0,
  list: [],
  isFetching: true,
};

const pokemonTypeList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_TYPES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POKEMON_TYPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload?.results,
        total: action.payload?.count,
      };
    case RECEIVE_POKEMON_TYPES_FAILED:
      return {
        ...state,
        isFetching: false,
        list: action.payload?.results,
        total: action.payload?.count,
      };
    default:
      return state;
  }
};

export default pokemonTypeList;
