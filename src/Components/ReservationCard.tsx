import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard: FC<ReservationCardTypes> = ({ name, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      className='reservation-card-container'
      onClick={() => dispatch(removeReservation(index))}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
