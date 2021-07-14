import React, { useEffect } from 'react';
import './exchange-header.scss';
import { useSelector } from 'react-redux';
import { selectCurrency, setCurrency } from 'features/general/generalSlice';
import { useDispatch } from 'react-redux';
import { Image } from 'react-bootstrap';

const ExchangeHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrency('btc'));
  }, [dispatch]);

  const activeCurrency = useSelector(selectCurrency);

  return (
    <div className="balance-wrap d-flex align-items-center">
      <div className="text-right mr-12">
        <div className="balance-head">Total Balance</div>
        <div className="balance">
          {activeCurrency.balance} {activeCurrency.type}
        </div>
      </div>
      <div className="currency ml-1">
        <Image src={activeCurrency.icon} />
      </div>
    </div>
  );
};

export default ExchangeHeader;
