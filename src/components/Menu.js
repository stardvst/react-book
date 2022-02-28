import Recipe from './Recipe';

const Menu = ({ recipes, onRemoveRecipe, onRateRecipe }) => {
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
