// import { useRef } from 'react';
import { useInput } from '../hooks/useInput';

const AddRecipeForm = ({ onNewRecipe }) => {
  // const titleRef = useRef();
  // const ratingRef = useRef();

  // const submit = e => {
  //   e.preventDefault();
  //   const title = titleRef.current.value;
  //   const rating = ratingRef.current.value;
  //   onNewRecipe(title, rating);
  //   titleRef.current.value = '';
  //   ratingRef.current.value = '';
  // };

  const [titleProps, resetTitle] = useInput('');
  const [ratingProps, resetRating] = useInput(5);

  const submit = e => {
    e.preventDefault();
    onNewRecipe(titleProps.value, ratingProps.value);
    resetTitle();
    resetRating();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Recipe title:</label>
        {/* <input ref={titleRef} type="text" placeholder="Recipe title..." required /> */}
        <input {...titleProps} type="text" placeholder="Recipe title..." required />
      </div>
      <div>
        <label>Recipe rating:</label>
        {/* <input ref={ratingRef} type="number" min={1} max={5} value={3} required /> */}
        <input {...ratingProps} type="number" min={1} max={5} required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
