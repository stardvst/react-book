import { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import Menu from './components/Menu';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';
import WordCount from './components/WordCount';
import { useCallback } from 'react';

const App = () => {
  useAnyKeyToRender();

  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [fn]);

  return (
    <>
      <WordCount>This is really really weird...</WordCount>
      <Menu />
      <AddRecipeForm />
    </>
  );
};

export default App;
