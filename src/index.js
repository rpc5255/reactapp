import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';

import * as serviceWorker from './serviceWorker';
import Sign_up from './Sign_up';

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Sign_up />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
