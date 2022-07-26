import Recipe from './Recipe';
import { useRecipes } from '../providers/RecipeProvider';
import FavoriteRecipe from './FavoriteRecipe';

const Menu = () => {
  const { recipes, removeRecipe, rateRecipe } = useRecipes();

  if (!recipes.length) {
    return <div>No recipes listed.</div>;
  }

  return (
    <article>
      <FavoriteRecipe />
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} onRemove={removeRecipe} onRate={rateRecipe} />
        ))}
      </div>
    </article>
  );
};

export default Menu;
