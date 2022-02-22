import Instructions from './Instructions';
import Ingredient from './Ingredient';
import StarRating from './StarRating';

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section id="baked-salmon">
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
      <Instructions title={'Cooking Instructions'} steps={steps} />
      <StarRating style={{ backgroundColor: 'lightblue' }} />
    </section>
  );
};

export default Recipe;
