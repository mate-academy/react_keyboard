import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components/App/App';
import { App1 } from './components/App1/App1';

import './index.scss';

ReactDOM.render(
  <div>
    <App />
    <App1 />
  </div>,
  document.getElementById('root'),
);
