import React from 'react';
interface Props {
  num?: number;
}
export const PruebaTsx: React.FC<Props> = ({ num }) => {
  return <div className='text-white'>num: {num}</div>;
};
