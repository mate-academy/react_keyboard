import { createRoot } from 'react-dom/client';
import { App } from './App';
// import { AppFC } from './AppFC';

import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
