const Ingredient = ({ amount, measurement, name }) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};

export default Ingredient;
