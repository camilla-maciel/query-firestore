import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import queryApp from './reducers';
import App from './containers/Query';

const store = createStore(queryApp, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
