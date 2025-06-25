import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root');

// Verifica se o elemento raiz existe antes de criar a raiz do React
if (rootElement) {
  // Cria a raiz do React e renderiza o componente App
  createRoot(rootElement).render(<App />);
} else {
  throw new Error("Element with ID 'root' not found in the document.");
}
