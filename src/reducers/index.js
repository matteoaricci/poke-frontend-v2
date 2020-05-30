import { combineReducers } from 'redux';
import {fetchPokeReducer} from './fetchPokeReducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  fetchPokeReducer
});

export default rootReducer;