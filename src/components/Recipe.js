import Instructions from './Instructions';
import Ingredient from './Ingredient';

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section id="baked-salmon">
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <Ingredient {...ingredient} />
        ))}
      </ul>
      <Instructions title={'Cooking Instructions'} steps={steps} />
    </section>
  );
};

export default Recipe;
