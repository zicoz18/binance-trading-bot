import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import ReduxStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()} >
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

