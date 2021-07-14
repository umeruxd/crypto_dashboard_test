import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const location = useLocation();
  const child = React.Children.only(children);
  const childClassName = child.props.className || null;
  const className =
    location.pathname === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props} to={props.href} className={className}>
      {React.cloneElement(child)}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
};

export default ActiveLink;
