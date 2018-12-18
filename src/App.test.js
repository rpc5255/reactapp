import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Sign_up from './sign_up';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.render(<Sign_up />, div);
  ReactDOM.unmountComponentAtNode(div);
});
