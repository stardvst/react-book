import { FaTrash } from 'react-icons/fa';
import Instructions from './Instructions';
import Ingredient from './Ingredient';
import StarRating from './StarRating';
import Checkebox from './Checkebox';

const Recipe = ({ id, name, ingredients, steps, rating, onRemove, onRate }) => {
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
};

export default Recipe;
