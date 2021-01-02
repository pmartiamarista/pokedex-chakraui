import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemonTypes } from "redux/actions/type-list-actions";

function Home({ dispatch }) {
  useEffect(() => {
    dispatch(fetchPokemonTypes());
    return () => {};
  }, [dispatch]);
  return null;
}

export default Home = connect()(Home);
