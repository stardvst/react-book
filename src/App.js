import { useState } from 'react';
import Menu from './components/Menu';
import data from './data/recipes.json';

const App = () => {
  const [recipes, setRecipes] = useState(data);
  return (
    <Menu
      recipes={recipes}
      onRemoveRecipe={id => {
        const newRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(newRecipes);
      }}
      onRateRecipe={(id, rating) => {
        const newRecipes = recipes.map(recipe => (recipe.id === id ? { ...recipe, rating } : recipe));
        setRecipes(newRecipes);
      }}
    />
  );
};

export default App;
