import React from 'react';
import logo from 'static/images/logo.png';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const NotFound = () => {
  const isAuthenticated = true;
  return (
    <div className="container text-center">
      <div className="row d-flex full-height align-items-center justify-content-center">
        <div>
          <div className="crypto-logo logo-404">
            <Link to="/">
              <Image src={logo} />
            </Link>
          </div>
          <h4 className="mb-0 fw-600 mt-64">Ooops!!</h4>
          <h1 className="fz-200 text-danger-1 fw-300 my-24">404</h1>
          <h5 className="fw-500 mb-lg-64 mb-48">
            THAT PAGE DOESN’T EXIST OR IS UNAVAILABLE.
          </h5>
          <Link
            className="btn btn-primary btn-lg"
            to={isAuthenticated ? '/' : '/login'}
          >
            Back to {isAuthenticated ? 'Home' : 'Login'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
