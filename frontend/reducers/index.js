import { combineReducers } from 'redux';
import {notes} from './notes_reducer';

const reducer = combineReducers({
  notes: notes
});

export default reducer;
