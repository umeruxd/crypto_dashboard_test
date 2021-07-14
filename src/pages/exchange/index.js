import React from 'react';
import ExchangeHeader from 'components/exchange/ExchangeHeader';
import CoinMarket from 'components/exchange/CoinMarket';
import BuySellForm from 'components/exchange/BuySellForm';

const Exchange = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="main-head">Exchange</h1>
      </div>
      <div className="page-content">
        <div className="exhchange-header-wrap mb-32">
          <ExchangeHeader />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-12"></div>
            <div className="col-xl-4 col-12">
              <CoinMarket />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-12">
              <BuySellForm type="buy" />
            </div>
            <div className="col-xl-6 col-12">
              <BuySellForm type="sell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
