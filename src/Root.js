import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'store';
import App from 'app/App';

const Root = () => {
  //The <Provider /> makes the Redux store available to any nested components
  // that have been wrapped in the connect() function
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;
