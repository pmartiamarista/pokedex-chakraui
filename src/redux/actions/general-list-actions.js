import instance from 'config/config';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS_SUCCESS = 'RECEIVE_POKEMONS_SUCCESS';
export const RECEIVE_POKEMONS_FAILED = 'RECEIVE_POKEMONS_FAILED';

const URL = '/pokemon';

const fetchPokemons = async (total, dispatch) => {
  try {
    const response = await instance.get(URL + `?limit=${total}&offset=0`);
    console.log(response);
    dispatch({ type: RECEIVE_POKEMONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: RECEIVE_POKEMONS_FAILED });
  }
};

export const fetchTotalPokemon = () => async (dispatch) => {
  dispatch({ type: REQUEST_POKEMONS });
  try {
    const response = await instance.get(URL);
    fetchPokemons(response.data.count, dispatch);
  } catch (error) {
    console.log(error);
  }
};
