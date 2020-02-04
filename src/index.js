import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('app'));

serviceWorker.unregister();
