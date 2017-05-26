import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotLoadContainer } from 'react-hot-loader';
import App from './components/App';

const render = (App) => {
  ReactDOM.render(
    <ReactHotLoadContainer>
      <App />
    </ReactHotLoadContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}
