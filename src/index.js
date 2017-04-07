import React from 'react';
import ReactDOM from 'react-dom';
import CounterPage from './counter/components/counterPage/CounterPage';
import ContactsContainer from './contacts/contacts.container';
import * as reducers from './contacts/contacts.reducer';
import { createStore, combineReducers  } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import App from './App';
import Home from './Home';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  devToolsEnhancer()
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="contacts" component={ContactsContainer} />
        <Route path="counter" component={CounterPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
