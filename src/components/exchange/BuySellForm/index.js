import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup
} from 'react-bootstrap';

import { handleBuySellForm } from 'features/general/generalSlice';
import { useDispatch } from 'react-redux';

const BuySellCoin = props => {
  const dispatch = useDispatch();

  const [currencyName, setCurrencyName] = useState('Dollar ($)');
  const [formData, setFormData] = useState({
    amount: '',
    price: '',
    total: '',
    type: props.type
  });
  const inputHandler = (value, type) => {
    let data = {};
    data[type] = value;
    setFormData({ ...formData, ...data });
  };

  // useEffect(() => {
  const handleForm = e => {
    e.preventDefault();
    dispatch(handleBuySellForm(formData));
  };
  // }, [dispatch, inputHandler]);

  return (
    <div className="page-section">
      <div className="page-section-header">
        <h1 className="main-head text-capitalize">{props.type} Coin</h1>
      </div>
      <div className="page-section-body">
        <Form onSubmit={handleForm}>
          <div className="form-control-wrap mb-24">
            <Form.Label htmlFor={`amount-${props.type}`}>
              Amount of bitcoins
            </Form.Label>
            <Form.Control
              label="amount"
              name="amount"
              id={`amount-${props.type}`}
              placeholder={`How many bitcoins do you want to buy? ${props.type}`}
              value={formData.amount}
              onChange={e => inputHandler(e.target.value, 'amount')}
            />
          </div>
          <div className="form-control-wrap mb-24">
            <Form.Label htmlFor={`price-${props.type}`} className="w-100">
              Price
            </Form.Label>
            <InputGroup className="">
              <FormControl
                id={`price-${props.type}`}
                className="dark-border"
                aria-label="Text input with dropdown button"
                value={formData.price}
                onChange={e => inputHandler(e.target.value, 'price')}
              />

              <DropdownButton
                variant="outline-secondary"
                title={currencyName}
                id={`currency-price-${props.type}`}
                align="end"
              >
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Dollar ($)')}
                >
                  Dollar ($)
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Pound (£)')}
                >
                  Pound (£)
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Euro (€)')}
                >
                  Euro (€)
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className="form-control-wrap">
            <Form.Label htmlFor={`total-${props.type}`} className="w-100">
              Total
            </Form.Label>
            <InputGroup className="mb-24">
              <FormControl
                id={`total-${props.type}`}
                className="dark-border"
                aria-label="Text input with dropdown button"
                value={formData.total}
                onChange={e => inputHandler(e.target.value, 'total')}
              />

              <DropdownButton
                variant="outline-secondary"
                title={currencyName}
                id={`currency-total-${props.type}`}
                align="end"
              >
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Dollar ($)')}
                >
                  Dollar ($)
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Pound (£)')}
                >
                  Pound (£)
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => setCurrencyName('Euro (€)')}
                >
                  Euro (€)
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <Button type="submit" className="btn-blue-2 text-capitalize btn-lg">
              {props.type} Coins
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BuySellCoin;
