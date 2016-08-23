import { Provider } from 'react-redux';
import React from 'react';
import App from './app';
import Synth from './synth/synth';


const Root = ({store}) => (
  <Provider store={store}>
    <div>    
      <App/>
    </div>
  </Provider>
);

export default Root;
