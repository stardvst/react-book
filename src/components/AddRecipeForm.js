// import { useRef } from 'react';
import { useState } from 'react';

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

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(5);

  const submit = e => {
    e.preventDefault();
    onNewRecipe(title, rating);
    setTitle('');
    setRating(5);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Recipe title:</label>
        {/* <input ref={titleRef} type="text" placeholder="Recipe title..." required /> */}
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Recipe title..."
          required
        />
      </div>
      <div>
        <label>Recipe rating:</label>
        {/* <input ref={ratingRef} type="number" min={1} max={5} value={3} required /> */}
        <input value={rating} onChange={e => setRating(e.target.value)} type="number" min={1} max={5} required />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRecipeForm;
