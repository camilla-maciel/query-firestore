import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { JssProvider, jss } from 'react-jss';

import queryApp from './reducers';
import App from './containers/Query';

jss.options.insertionPoint = document.getElementById('material-ui-jss');
const store = createStore(queryApp, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <IntlProvider>
      <JssProvider jss={jss}>
        <App />
      </JssProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
