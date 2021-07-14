import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { matchDynamicRoute } from 'helpers/generic.methods';

import ProtectedRoute from './ProtectedRoute';

const HandlePageRoutes = (routes, layout) => {
  const location = useLocation();

  return routes.map((route, key) => {
    if (route.collapsable && route.path !== location.pathname) {
      return route.subNav.map(subNav => {
        if (matchDynamicRoute(subNav)) {
          return HandlePageRoutes(subNav.links, layout);
        }
        return null;
      });
    }

    if (
      route.path === location.pathname ||
      matchDynamicRoute(route) === location.pathname
    ) {
      if (layout === 'auth') {
        return (
          <Route path={route.path} component={route.component} key={key} />
        );
      } else if (layout === 'portal') {
        return (
          <ProtectedRoute
            path={route.path}
            component={route.component}
            key={route.name + '-' + key}
          />
        );
      } else return null;
    } else return null;
  });
};

export default HandlePageRoutes;
