import React, { useState, useEffect } from 'react';
import '../style/header.css';


const BouncingHeading = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    setIsBouncing(true);
  }, []);

  return (
    <h1 className={isBouncing ? 'bounce' : ''}>
      Chuck Norris
    </h1>
  );
};

export default BouncingHeading;
