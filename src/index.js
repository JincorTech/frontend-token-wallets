import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import 'normalize.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './assets/coreui/scss/style.scss';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';
import './assets/images/logo/logo.png';
import './assets/images/logo/logo-symbol.png';

import configureStore, { history } from './redux/configureStore';
import routes from './routes';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(require('./routes').default);
  });
}
