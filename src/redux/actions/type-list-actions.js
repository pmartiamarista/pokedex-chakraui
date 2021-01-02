import instance from "config/config";

export const REQUEST_POKEMON_TYPES = "REQUEST_POKEMON_TYPES";
export const RECEIVE_POKEMON_TYPES_SUCCESS = "RECEIVE_POKEMON_TYPES_SUCCESS";
export const RECEIVE_POKEMON_TYPES_FAILED = "RECEIVE_POKEMON_TYPES_FAILED";

const URL = "/type";

export const fetchPokemonTypes = () => async (dispatch) => {
  dispatch({ type: REQUEST_POKEMON_TYPES });
  try {
    const response = await instance.get(URL);
    dispatch({ type: RECEIVE_POKEMON_TYPES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: RECEIVE_POKEMON_TYPES_FAILED });
  }
};
