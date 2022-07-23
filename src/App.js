import { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import Menu from './components/Menu';
import data from './data/recipes.json';

const App = () => {
  const [recipes, setRecipes] = useState(data);
  return (
    <>
      <Menu
        onRemoveRecipe={id => {
          const newRecipes = recipes.filter(recipe => recipe.id !== id);
          setRecipes(newRecipes);
        }}
        onRateRecipe={(id, rating) => {
          const newRecipes = recipes.map(recipe => (recipe.id === id ? { ...recipe, rating } : recipe));
          setRecipes(newRecipes);
        }}
      />
      <AddRecipeForm
        onNewRecipe={(title, rating) => {
          const newRecipes = [...recipes, { id: Date.now(), name: title, rating, ingredients: [], steps: [] }];
          setRecipes(newRecipes);
        }}
      />
    </>
  );
};

export default App;
