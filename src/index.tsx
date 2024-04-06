import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.scss';

const initialState = {
  changeMessage: 'Nothing was pressed yet',
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <App {...initialState} />,
);
