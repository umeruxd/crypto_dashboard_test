import React from 'react';
import { Image, Table } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './coin-market.scss';
import tabData from './data';

const CoinMarket = () => {
  return (
    <div className="page-section-tabs">
      <Tabs>
        <TabList>
          <div className="px-20">
            <Tab>Dollar</Tab>
            <Tab>Bitcoin</Tab>
            <Tab>Ethereum</Tab>
          </div>
        </TabList>
        <div className="px-20">
          {tabData.map((data, i) => {
            return (
              <TabPanel key={i}>
                <Table hover className="coin-market-table">
                  <tbody>
                    {data.map((currency, i) => {
                      return (
                        <tr key={currency.currency}>
                          <td className="table-icon">
                            <Image src={currency.icon} />
                          </td>
                          <td className="text-white">{currency.currency}</td>
                          <td className="text-blue-4">{currency.amount}</td>
                          <td
                            className={
                              currency.impact === 'positive'
                                ? 'text-success'
                                : 'text-danger'
                            }
                          >
                            {currency.impact === 'positive' ? '+' : '-'}
                            {currency.rate}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </TabPanel>
            );
          })}
          {/* <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel> */}
        </div>
      </Tabs>
    </div>
  );
};

export default CoinMarket;
