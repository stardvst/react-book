import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import recipes from './data/recipes.json';

export const ColorContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <ColorContext.Provider value={{ recipes }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
