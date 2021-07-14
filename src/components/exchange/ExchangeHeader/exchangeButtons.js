import React from 'react';
import Arrow from 'components/icons/arrow';
import './exchange-header.scss';

const ExchangeHeader = () => {
  return (
    <div className="btn-wrap">
      <button className="btn btn-danger btn-light-bg mr-16">
        <span className="pr-2 arrow-icon arrow-icon-up">
          <Arrow />
        </span>
        Send
      </button>
      <button className="btn btn-success btn-light-bg">
        <span className="pr-2 arrow-icon arrow-icon-down">
          <Arrow />
        </span>
        Receive
      </button>
    </div>
  );
};

export default ExchangeHeader;
