import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: FC<CustomerCardType> = ({ id, name, food }) => {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState('');

  const handleClick = () => {
    if (!customerFoodInput) return;

    dispatch(addFoodToCustomer({ food: customerFoodInput, id }));
    setCustomerFoodInput('');
  };

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
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
