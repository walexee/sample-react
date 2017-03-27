// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app/App';
// import './assets/index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './contacts/components/ContactPage';
import reducer from './contacts/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  contacts: [{id: 1, firstName: 'John', lastName: 'Jobs', email: 'john.jobs@example.com'}],
  contactInEdit: {}
}
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ContactPage />
  </Provider>,
  document.getElementById('root')
);
