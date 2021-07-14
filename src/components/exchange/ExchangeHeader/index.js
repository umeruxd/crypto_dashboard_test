import React from 'react';
import ExchangeButtons from './exchangeButtons';
import ExchangeStatus from './exchangeStatus';
import './exchange-header.scss';

const ExchangeHeader = () => {
  return (
    <div className="exchage-wrap d-flex align-items-center justify-content-between w-100">
      <ExchangeButtons />
      <ExchangeStatus />
    </div>
  );
};

export default ExchangeHeader;
