/* eslint-disable default-case */
import produce from 'immer';

import { CACHE_POKEMON } from 'redux/actions/list-tile-actions';

const initialState = {
  pokemons: {},
};

const pokemonCache = produce((draft, { type, payload }) => {
  switch (type) {
    case CACHE_POKEMON:
      draft.pokemons[payload.name] = payload;
      return;
  }
}, initialState);

export default pokemonCache;
