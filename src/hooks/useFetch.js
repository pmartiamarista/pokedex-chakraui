import { useReducer, useEffect, useRef } from 'react';

import instance from 'config/config';
import { actions, initState, reducer } from './utils';

export function useFetch({ url, makeRequest }) {
  const cache = useRef({});
  const [state, localDispatch] = useReducer(reducer, initState);

  useEffect(() => {
    let cancelRequest = false;
    const fetchData = async () => {
      localDispatch({ type: 'INIT' });
      try {
        const response = await instance.get(url);
        cache.current[url] = response.data;
        if (cancelRequest) return;
        localDispatch({ type: actions.SUCCESS, payload: response.data });
      } catch (error) {
        if (cancelRequest) return;
        localDispatch({ type: actions.FAILED });
      }
    };
    if (makeRequest) {
      fetchData();
    }
    return () => {
      cancelRequest = true;
      localDispatch({ type: actions.CLEAN });
    };
  }, [url]);

  return { status: state.status, data: state.data };
}
