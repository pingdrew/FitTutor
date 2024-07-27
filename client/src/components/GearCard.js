import React from 'react';

const GearCard = ({ gear }) => {
  return (
    <div>
      <h3>{gear.name}</h3>
      <p>{gear.description}</p>
      <p>Price: ${gear.price}</p>
    </div>
  );
};

export default GearCard;
