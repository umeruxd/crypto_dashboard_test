import React from 'react';
import { Switch, Redirect, Link } from 'react-router-dom';
import authRoutes from 'routes/AuthRoutes';
import HandlePageRoutes from 'routes/HandlePageRoutes';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import logo from 'static/images/logo.png';
import { useSelector } from 'react-redux';

const Pages = () => {
  const isAuthenticated = true;
  let routeFragment = null;
  // Redirect to portal if loggedin
  if (isAuthenticated) {
    routeFragment = (
      <Switch>
        <Redirect from="/" to="/" />
      </Switch>
    );
  } else {
    // Show auth routes
    routeFragment = <Switch>{HandlePageRoutes(authRoutes, 'auth')}</Switch>;
  }
  return (
    <div>
      <Container fluid className="px-0">
        <Row className="h-100 full-height-min no-gutters">
          <Col lg={8} md={6} className="bg-lightgray-2 d-none d-md-block">
            <LeftColumn />
          </Col>
          <Col
            lg={4}
            md={6}
            className="align-self-md-start align-self-center pt-xl-96 pt-lg-80 p-56 h-100 full-height-min"
          >
            <Link
              to="/"
              className="crypto-logo logo-small d-md-none d-block mb-40"
            >
              <Image src={logo} />
            </Link>
            {routeFragment}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pages;
