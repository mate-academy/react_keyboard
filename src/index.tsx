import ReactDOM from 'react-dom';
import { App } from './App';

import './index.scss';

const initialState = {
  pressed: false,
  key: '',
};

ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('root'),
);
