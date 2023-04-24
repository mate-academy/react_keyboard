import React from 'react';
import { KeyPressed } from './Component';
import './App.scss';

export const App: React.FC = () => (
  <div className="App">
    <p className="App__message"><KeyPressed /></p>
  </div>
);
