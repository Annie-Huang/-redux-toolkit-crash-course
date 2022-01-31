import React, { FC } from 'react';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: FC<CustomerCardType> = ({ id, name, food }) => {
  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className='customer-food-input-container'>
          <input />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
