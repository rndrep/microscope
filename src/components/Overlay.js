import React from 'react';

import './Overlay.css';

const Overlay = ({ name = '' }) => {
  return (
    <div className='overlay'>
      <p className='microscope-name'>{name}</p>
    </div>
  );
};

export default Overlay;
