import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './App';
import 'lib-flexible'
import * as serviceWorker from './serviceWorker';
import data from './components/main';
import Index from './router/index/index'

// ReactDOM.render(<App data={data}/>, document.getElementById('root'));
ReactDOM.render(<Index data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
