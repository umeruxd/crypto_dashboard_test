import React from 'react';
import './stats.scss';

const BuySellCoin = props => {
  return (
    <div className="page-section transaction-history px-0">
      <div className="page-section-header has-bottom-border px-20">
        <div className="row justify-content-between align-items-center mb-24">
          <div className="col-lg-4 col-12">
            <div className="stat-amount">
              <div class="amount-head text-uppercase text-blue-3">
                BTC PRICE
              </div>
              <div class="amount text-white">$8,908.54</div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="stat-amount">
              <div class="amount-head text-uppercase text-blue-3">
                MARKET CAP
              </div>
              <div class="amount text-white">$349,704,948,908</div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="stat-amount">
              <div class="amount-head text-uppercase text-blue-3">
                VOLUME (24H)
              </div>
              <div class="amount text-white">$83,4I8,943,494</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section-body px-20"></div>
    </div>
  );
};

export default BuySellCoin;
