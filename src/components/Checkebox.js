import React, { useReducer } from 'react';
// import { useEffect } from 'react';

const Checkebox = () => {
  const [checked, toggle] = useReducer(checked => !checked, false);

  //useEffect(() => alert(`checked: ${checked}`));

 // const toggle = () => setChecked(checked => !checked);

  return (
    <>
      <input
        type="checkbox"
        name="check"
        id="check_box"
        value={checked}
        onChange={toggle}
      />
      {checked ? 'checked' : 'unchecked'}
    </>
  );
};

export default Checkebox;
