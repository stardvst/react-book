import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RecipeProvider from './providers/RecipeProvider';

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
