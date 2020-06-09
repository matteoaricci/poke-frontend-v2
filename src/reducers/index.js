import { combineReducers } from 'redux';
import {fetchPokeReducer} from './fetchPokeReducer'
import {fetchMoveSetReducer} from './fetchMoveSetReducer'
import {fetchMoveReducer} from './fetchMoveReducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  fetchPokeReducer,
  fetchMoveReducer,
  fetchMoveSetReducer
});

export default rootReducer;