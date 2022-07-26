import { useEffect, useState } from 'react';

const FavoriteRecipe = () => {
  const [text, setText] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(text);
    setText('');
  };

  useEffect(() => {
    console.log(`typing ${text}`);
  }, [text]);

  useEffect(() => {
    console.log(`phrase: ${phrase}`);
  }, [phrase]);

  useEffect(() => {
    console.log(`logged once after initial render`);
  }, []);

  useEffect(() => {
    return () => {
      console.log(`logged after component is removed from tree`);
    };
  }, []);

  return (
    <div>
      <label>Favorite recipe:</label>
      <input type="text" value={text} placeholder={phrase} onChange={e => setText(e.target.value)} />
      <button onClick={createPhrase}>Send</button>
    </div>
  );
};

export default FavoriteRecipe;
