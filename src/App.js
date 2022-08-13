import { useEffect, useLayoutEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import Menu from './components/Menu';
import useAnyKeyToRender from './hooks/useAnyKeyToRender';
import WordCount from './components/WordCount';
import { useCallback } from 'react';
import useWindowSize from './hooks/useWindowSize';
import CatShelter from './components/CatShelter';
import TahoePeaks from './components/TahoePeaks';
// import SimpleBigList from './components/SimpleBigList';
import VirtualizedBigList from './components/VirtualizedBigList';
import Github from './components/github/Github';
import SiteLayout, { BreakThings, Callout } from './components/error_boundary/SiteLayout';

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
      <SiteLayout
        menu={
          <>
            <p>Menu</p>
            <BreakThings />
          </>
        }
      >
        <>
          <Callout>Callout</Callout>
          <h1>Contents</h1>
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout>

      <Github />
      <WordCount>This is really really weird...</WordCount>
      <Menu />
      <AddRecipeForm />
      <CatShelter />
      <TahoePeaks />
      {/* <SimpleBigList /> */}
      <VirtualizedBigList />
    </>
  );
};

export default App;
