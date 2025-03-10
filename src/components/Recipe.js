import { FaTrash } from 'react-icons/fa';
import Instructions from './Instructions';
import Ingredient from './Ingredient';
import StarRating from './StarRating';
import Checkebox from './Checkebox';
import { memo } from 'react';

const isSameRecipe = (prevProps, nextProps) =>
  prevProps.id === nextProps.id &&
  prevProps.name === nextProps.name &&
  prevProps.ingredients === nextProps.ingredients &&
  prevProps.steps === nextProps.steps &&
  prevProps.rating === nextProps.rating;

const Recipe = memo(({ id, name, ingredients, steps, rating, onRemove, onRate }) => {
  console.log('recipe:', id, name);
  return (
    <section id="baked-salmon">
      <Checkebox />
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
      <Instructions title={'Cooking Instructions'} steps={steps} />
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        selectedStars={rating}
        onRate={rating => onRate(id, rating)}
      />
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
    </section>
  );
}, isSameRecipe);

export default Recipe;
