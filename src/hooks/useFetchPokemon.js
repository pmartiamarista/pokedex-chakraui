/* eslint-disable default-case */
import { useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import instance from 'config/config';
import { actions, initState, reducer } from './utils';
import { cachePokemon } from 'redux/actions/list-tile-actions';

export function useFetchPokemon({ url, name }) {
  const dispatch = useDispatch();
  const { pokemonCache } = useSelector((state) => state);

  const pokemon = pokemonCache.pokemons?.[name];

  const [state, localDispatch] = useReducer(reducer, initState);

  useEffect(() => {
    let cancelRequest = false;
    const fetchData = async () => {
      localDispatch({ type: 'INIT' });
      if (pokemon) {
        localDispatch({ type: actions.SUCCESS, payload: pokemon });
        return;
      }
      try {
        const response = await instance.get(url);
        if (cancelRequest) return;
        localDispatch({ type: actions.SUCCESS, payload: response.data });
        cachePokemon(response.data, dispatch);
      } catch (error) {
        if (cancelRequest) return;
        localDispatch({ type: actions.FAILED });
      }
      return;
    };
    fetchData();
    return () => {
      cancelRequest = true;
      localDispatch({ type: actions.CLEAN });
    };
  }, [dispatch, pokemon, url]);

  return { status: state.status, data: state.data };
}
