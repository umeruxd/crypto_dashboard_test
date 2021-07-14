import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from 'routes';
import HandlePageRoutes from 'routes/HandlePageRoutes';
import Sidebar from 'components/Sidebar';
import DashboardHeader from 'components/General/DashboardHeader';

const DashboardLayout = () => {
  const isAuthenticated = true;
  let routeFragment = null;
  // Redirected if not loggedin
  if (!isAuthenticated) {
    routeFragment = (
      <Switch>
        <Redirect to="/login" />
      </Switch>
    );
  } else {
    // Show dashboard routes
    routeFragment = <Switch>{HandlePageRoutes(routes, 'dashboard')}</Switch>;
  }
  return (
    <div className="main d-flex align-items-stretch">
      <Sidebar />
      <div id="content">
        <div className="h-100 full-height-min rounded-inner">
          <DashboardHeader />
          {routeFragment}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
