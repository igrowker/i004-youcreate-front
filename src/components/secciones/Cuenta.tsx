import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Cuenta: React.FC = () => {

  return (
    <div className='w-[500px] ml-10 p-4 text-yellow-50 bg-slate-700  m-auto h-[100px]'>
      <FontAwesomeIcon icon={faUser} />
      <br />
      <h1 className='text-xl'>Cuenta</h1>
    </div>
  );
};

