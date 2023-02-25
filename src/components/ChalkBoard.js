import React, { useState } from 'react';
import './ChalkBoard.css';

function ChalkBoard() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <h1 className='chalk-text'>This is a test app to check Github deployment.</h1>
      
  );
}

export default ChalkBoard;
