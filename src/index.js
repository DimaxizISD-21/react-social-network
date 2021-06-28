import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./redux/redux-store";

const state = store.getState();

const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender();

store.subscribe(rerender);