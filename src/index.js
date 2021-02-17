import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Provider from 'react-redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/character';
import charactersListReducer from './reducers/characterList';
import characterFilterReducer from './reducers/characterFilter';
import './index.css';
import App from './components/App';

const rootReducer = combineReducers({
  char: characterReducer,
  charList: charactersListReducer,
  charFilter: characterFilterReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
