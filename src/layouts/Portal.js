import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from 'routes';
import HandlePageRoutes from 'routes/HandlePageRoutes';
import Sidebar from 'components/Sidebar';

const PortalLayout = () => {
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
    // Show portal routes
    routeFragment = <Switch>{HandlePageRoutes(routes, 'portal')}</Switch>;
  }
  return (
    <div className="main d-flex align-items-stretch">
      <Sidebar />
      <div id="content">
        <div className="h-100 full-height-min rounded-inner">
          {routeFragment}
        </div>
      </div>
    </div>
  );
};

export default PortalLayout;
