import React from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './counter/components/counterPage/CounterPage';
import ContactsList from './contacts/containers/ContactsList';
import reducer from './contacts/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const initialState = {
  contacts: [{id: 1, firstName: 'John', lastName: 'Jobs', email: 'john.jobs@example.com'}],
  contactInEdit: {}
}
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={ContactsList} />
        <Route path="/counter" component={CounterPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
