import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const store = {
  posts: [
    {id: 1, msg: 'Hi, how are you?', likesCount: 12},
    {id: 2, msg: 'It`s my first post', likesCount: 9}
  ],
  dialogs: [
    {id: 1, name: 'Katya'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Nastya'}
  ],
  messages: [
    {id: 1, msg: 'Hi'},
    {id: 2, msg: 'How are you?'},
    {id: 3, msg: 'How is your day?'}
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
