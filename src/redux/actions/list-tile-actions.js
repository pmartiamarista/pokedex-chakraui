export const CACHE_POKEMON = 'CACHE_POKEMON';

const cachePokemon = async (pokemon, dispatch) => {
  dispatch({ type: CACHE_POKEMON, payload: pokemon });
};

export { cachePokemon };
