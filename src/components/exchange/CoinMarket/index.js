import React from 'react';
import Tabs from './tabs';

const CoinMarket = () => {
  return (
    <div className="page-section px-0">
      <div className="page-section-header px-20">
        <h1 className="main-head">Coin Market</h1>
      </div>
      <div className="page-section-body">
        <Tabs />
      </div>
    </div>
  );
};

export default CoinMarket;
