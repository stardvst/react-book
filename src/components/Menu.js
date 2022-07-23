import { useContext } from 'react';
import Recipe from './Recipe';
import { ColorContext } from './../index';

const Menu = ({ onRemoveRecipe, onRateRecipe }) => {
  const { recipes } = useContext(ColorContext);

  if (!recipes.length) {
    return <div>No recipes listed.</div>;
  }

  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} onRemove={onRemoveRecipe} onRate={onRateRecipe} />
        ))}
      </div>
    </article>
  );
};

export default Menu;
