import React from 'react';
import ReactDOM from 'react-dom'; // import {createRoot} from 'react-dom/client'; - ReactDOM deprecated in React v18
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);