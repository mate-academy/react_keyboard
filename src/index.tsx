import { createRoot } from 'react-dom/client';
import App from './components/App';

import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
