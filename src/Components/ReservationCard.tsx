import React, { FC } from 'react';

interface ReservationCardTypes {
  name: string;
}

const ReservationCard: FC<ReservationCardTypes> = ({ name }) => {
  return <div className='reservation-card-container'>{name}</div>;
};

export default ReservationCard;
