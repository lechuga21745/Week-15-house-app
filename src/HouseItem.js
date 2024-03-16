import React from 'react';

const HouseItem = ({ house, onDelete }) => {
  const handleDelete = () => {
    onDelete(house.id);
  };

  return (
    <div>
      <h3>{house.name}</h3>
      <p>{house.address}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default HouseItem;
