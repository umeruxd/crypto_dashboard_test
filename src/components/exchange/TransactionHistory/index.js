import React from 'react';
import Search from 'components/General/Search';
import { Button, Image, Table } from 'react-bootstrap';
import tableData from './data';
import PaginationComp from './pagination';
import './transaction-history.scss';
import Triangle from 'static/images/triangle.png';

const BuySellCoin = props => {
  return (
    <div className="page-section transaction-history px-0">
      <div className="page-section-header px-20 d-flex justify-content-between align-items-center mb-32">
        <h1 className="main-head text-capitalize mb-0">Transaction History</h1>
        <Search />
      </div>
      <div className="page-section-body">
        <Table className="text-white">
          <thead>
            <tr>
              <th>
                Date <Image src={Triangle} />
              </th>
              <th>
                Time <Image src={Triangle} />
              </th>
              <th>
                Transaction ID <Image src={Triangle} />
              </th>
              <th>
                Value <Image src={Triangle} />
              </th>
              <th>
                Type <Image src={Triangle} />
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(row => {
              return (
                <tr>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.value}</td>
                  <td>
                    <Button
                      className="btn-light-bg fixed-width"
                      variant={row.type === 'Received' ? 'success' : 'danger'}
                    >
                      {row.type}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end px-20">
          <PaginationComp />
        </div>
      </div>
    </div>
  );
};

export default BuySellCoin;
