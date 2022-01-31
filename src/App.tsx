import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './Components/ReservationCard';
import { addReservation } from './features/reservationSlice';

// https://redux-toolkit.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components
function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  // This needs to match the store's reducer name
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard name={name} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          <div className='customer-food-card-container'>
            <p>Selena Gomez</p>
            <div className='customer-foods-container'>
              <div className='customer-food'></div>
              <div className='customer-food-input-container'>
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
