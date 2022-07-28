import { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import Menu from './components/Menu';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';
import WordCount from './components/WordCount';

const App = () => {
  useAnyKeyToRender();
  useEffect(() => {
    console.log('fresh render');
  });

  return (
    <>
      <WordCount>This is really really weird...</WordCount>
      <Menu />
      <AddRecipeForm />
    </>
  );
};

export default App;
