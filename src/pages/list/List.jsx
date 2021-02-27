import PokemonGrid from "components/PokemonGrid";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTotalPokemon } from "redux/actions/general-list-actions";
import { fetchPokemonTypes } from "redux/actions/type-list-actions";

function List({ dispatch, generalList: { isFetching, list, total } }) {

  useEffect(() => {
    dispatch(fetchPokemonTypes());
    dispatch(fetchTotalPokemon());
    return () => { };
  }, [dispatch]);

  return isFetching ? null : <PokemonGrid {...{ list, total }} />;
}

const mapStateToProps = ({ generalList }) => {
  return {
    generalList,
  };
};

export default List = connect(mapStateToProps)(List);
