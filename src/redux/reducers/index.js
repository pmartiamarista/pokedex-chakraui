import { combineReducers } from "redux";
import generalList from "./general-list-reducer";
import pokemonTypeList from "./type-list-reducer";

export default combineReducers({ generalList, pokemonTypeList });
