import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.scss';

// Tworzymy root i renderujemy komponent App w elemencie o id "root"
createRoot(document.getElementById('root') as HTMLElement).render(<App />);
