// import packages statements
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

// import containers statements
import { mainContainer } from './containers/mainContainer';

// import css statements
import './index.css';

// import components statements
import App from './components/App';

// import service workers statements
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider inject={[mainContainer]}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
