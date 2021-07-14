import 'static/scss/main.scss';
import React, { Fragment } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PortalLayout from 'layouts/Portal';
import NotFound from 'pages/errors/404';
import ProtectedRoute from 'routes/ProtectedRoute';
import routes from 'routes';
import { matchDynamicRoute } from 'helpers/generic.methods';

const App = () => {
  const location = useLocation();

  /* Map all the portal related protected route with auth guard */
  const portalPagesRoutes = routes.map((route, key) => {
    // check if route has a collapsible property and
    // map through all the sub navigation if exist
    if (route.collapsable && route.path !== location.pathname) {
      return route.subNav.map(subNav => {
        // Check if there is a dynamic params in the route
        if (matchDynamicRoute(subNav)) {
          // map through the subnav links and generate a route automatically
          return subNav?.links?.map((subRoute, index) => {
            if (
              subRoute.path === location.pathname ||
              matchDynamicRoute(subRoute) === location.pathname
            ) {
              return (
                <ProtectedRoute
                  path={route.path}
                  component={PortalLayout}
                  key={'parent-' + index}
                />
              );
            }
            return null;
          });
        }
        return null;
      });
    }
    // it's simply render the route if there is no sub nav
    if (route.path === location.pathname) {
      return (
        <ProtectedRoute
          path={route.path}
          component={PortalLayout}
          key={'parent-' + key}
        />
      );
    } else return null;
  });

  return (
    <Fragment>
      <Switch>
        {/* remove slash from the end of url  */}
        <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} />

        {/* authenticated/portal routes */}
        {portalPagesRoutes}

        {/* 404 route */}
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
