import {createRoot} from 'react-dom/client'
// import App from './App';
import TestApp from './TestApp';

const domNode = document.getElementById('root');

if (domNode !== null) {
  const root = createRoot(domNode);
  root.render(<TestApp/>)
}
