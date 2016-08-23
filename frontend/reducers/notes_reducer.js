import { NotesConstants } from '../actions/note_actions';

let validKeys = ["a", "s", "d", "f", "g"];
export const keyMap = {"a": "C5",
              "s": "D5",
              "d": "E5",
              "f": "F5",
              "g": "G5"};

export const notes = (state=[], action) => {
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (!state.includes(action.key) && validKeys.includes(action.key)) {
        return [...state, action.key];
      } else {
        return state;
      }
    case NotesConstants.KEY_RELEASED:
      if (state.includes(action.key) && validKeys.includes(action.key)) {
        let index = state.indexOf(action.key);
        return [state.slice(0,index), state.slice(index+1)];
      } else {
        return state;
      }
    default:
      return state;
    }
};
