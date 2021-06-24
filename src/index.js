import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import state, {addPost, subscribe, updateNewPostText} from "./state"

const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender();

subscribe(rerender);
