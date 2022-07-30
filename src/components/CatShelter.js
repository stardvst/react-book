import { useState } from 'react';
import Cat from './Cat';

const CatShelter = () => {
  const [cats, setCats] = useState(['biscuit', 'jungle', 'outlaw']);
  return (
    <div>
      <div>
        {cats.map((cat, idx) => (
          <Cat key={idx} name={cat} />
        ))}
      </div>
      <button onClick={() => setCats(cats => [...cats, prompt('Name the cat <3')])}>Add a cat</button>
    </div>
  );
};

export default CatShelter;
