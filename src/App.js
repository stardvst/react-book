import { useEffect, useLayoutEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import Menu from './components/Menu';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';
import WordCount from './components/WordCount';
import { useCallback } from 'react';
import useWindowSize from './hooks/useWindowSize';
import CatShelter from './components/CatShelter';
import GithubUser from './components/GithubUser';
import TahoePeaks from './components/TahoePeaks';

const App = () => {
  useAnyKeyToRender();
  useWindowSize();

  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [fn]);

  useLayoutEffect(() => console.log('layout render'));

  return (
    <>
      <GithubUser login={'stardvst'} />
      <WordCount>This is really really weird...</WordCount>
      <Menu />
      <AddRecipeForm />
      <CatShelter />
      <TahoePeaks />
    </>
  );
};

export default App;
