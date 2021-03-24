import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/character';
import characterListReducer from './reducers/characterList';
import characterFilterReducer from './reducers/characterFilter';
import './index.css';
import App from './components/App';

const rootReducer = combineReducers({
  char: characterReducer,
  charList: characterListReducer,
  charFilter: characterFilterReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);
