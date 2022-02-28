import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};

const StarRating = ({ style = {}, totalStars = 5, selectedStars = 3, onRate }) => {
  return (
    <div style={{ padding: '5px', ...style }}>
      {createArray(totalStars).map((_, index) => (
        <Star key={index} selected={selectedStars > index} onSelect={() => onRate(index + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
