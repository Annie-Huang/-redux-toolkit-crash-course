import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './Components/ReservationCard';

// https://redux-toolkit.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components
function App() {
  // This needs to match the store's reducer name
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard name={name} key={index} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input />
            <button>Add</button>
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
