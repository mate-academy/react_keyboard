/* eslint-disable prettier/prettier */
import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';

import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
