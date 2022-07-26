import React, { useState } from 'react';
// import { useEffect } from 'react';

const Checkebox = () => {
  const [checked, setChecked] = useState(false);

  //useEffect(() => alert(`checked: ${checked}`));

  return (
    <>
      <input
        type="checkbox"
        name="check"
        id="check_box"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? 'checked' : 'unchecked'}
    </>
  );
};

export default Checkebox;
