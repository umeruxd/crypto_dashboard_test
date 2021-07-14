import React from 'react';
import Search from 'components/General/Search';
import Profile from 'components/General/Profile';
import Notifications from 'components/General/Notifications';
import './dashboard-header.scss';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-wrap py-16 px-32">
      <div className="row justify-content-between">
        <div className="col">
          <Search />
        </div>
        <div className="col">
          <div className="row justify-content-end align-items-center no-gutters">
            <Notifications />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
