import React from 'react';
import CurrentBalance from './currentBalance';
import History from './history';

const Summary = () => {
  return (
    <div className="summary-container">
      <CurrentBalance />
      <History />
    </div>
  );
}

export default Summary;