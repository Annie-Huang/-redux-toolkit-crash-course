import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFoodToCustomer,
  deleteCustomer,
  deleteFood,
} from '../features/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: FC<CustomerCardType> = ({ id, name, food }) => {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState('');

  const handleAddBtnClick = () => {
    if (!customerFoodInput) return;

    dispatch(addFoodToCustomer({ food: customerFoodInput, id }));
    setCustomerFoodInput('');
  };

  const handleDeleteCustomerBtnClick = () => dispatch(deleteCustomer(id));
  const handleDeleteFoodBtnClick = () => dispatch(deleteFood(id));

  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <button onClick={handleDeleteCustomerBtnClick}>Delete Customer</button>
        <button onClick={handleDeleteFoodBtnClick} disabled={food.length === 0}>
          Delete food
        </button>

        <div className='customer-food-input-container'>
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={handleAddBtnClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
