import { useReducer, useEffect, useRef } from "react";
import instance from "config/config";

const initState = {
  data: {},
  status: "idle",
};

const reducerLayout = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        status: "fetching",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: { ...action.payload },
        status: "success",
      };
    case "FETCH_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "CLEAN":
      return {
        ...initState,
      };
    default:
      console.log(`Acción no encontrada ${action.type}`);
      return { ...state };
  }
};

export function useFetch(url) {
  const cache = useRef({});
  const [state, localDispatch] = useReducer(reducerLayout, initState);

  useEffect(() => {
    let cancelRequest = false;
    const fetchData = async () => {
      localDispatch({ type: "INIT" });
      try {
        const response = await instance.get(url);
        cache.current[url] = response.data;
        if (cancelRequest) return;
        localDispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        if (cancelRequest) return;
        localDispatch({ type: "FETCH_FAILED" });
      }
    };
    fetchData();
    return () => {
      cancelRequest = true;
      localDispatch({ type: "CLEAN" });
    };
  }, [url]);

  return { status: state.status, data: state.data };
}
