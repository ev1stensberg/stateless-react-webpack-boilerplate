import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorldComponent';
// You can use const Home = require('./App.jsx') if you'd like

ReactDOM.render(<HelloWorld message="Hello" children="World" />,
document.getElementById('content'));
