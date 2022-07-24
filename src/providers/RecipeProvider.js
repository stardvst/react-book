import { useState, createContext, useContext } from 'react';
import recipeData from '../data/recipes.json';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(recipeData);

  const addRecipe = (title, rating) => {
    const newRecipes = [...recipes, { id: Date.now(), name: title, rating, ingredients: [], steps: [] }];
    setRecipes(newRecipes);
  };

  const rateRecipe = (id, rating) => {
    const newRecipes = recipes.map(recipe => (recipe.id === id ? { ...recipe, rating } : recipe));
    setRecipes(newRecipes);
  };

  const removeRecipe = id => {
    const newRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(newRecipes);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, rateRecipe, removeRecipe }}>{children}</RecipeContext.Provider>
  );
};

export default RecipeProvider;
export const useRecipes = () => useContext(RecipeContext);
