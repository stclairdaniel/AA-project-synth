import { createStore } from 'redux';
import reducer from '../reducers/index';

const configureStore = () => {
  return createStore(reducer);
};

export default configureStore;
