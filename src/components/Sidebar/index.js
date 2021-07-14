import React from 'react';
import DashboardRoutes from 'routes/DashboardRoutes';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'helpers/hoc/Link';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Logo from 'static/images/logo.png';
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebar = () => {
  return (
    <Navbar id="sidebar" className="sidebar-nav sidebar-nav-open active">
      <div className="sidebar-wrapper">
        <Link className="navbar-logo d-block" to="/">
          <Image src={Logo} />
        </Link>
        <Scrollbars
          className="scrollbar-wrap"
          style={{ width: '100%', height: 'calc(100% - 50px)' }}
          renderThumbVertical={() => <div className="scrollbar-rail" />}
        >
          <div className="sidebar-primary bg-primary">
            <ul>
              {DashboardRoutes.map((item, index) => {
                return (
                  <li key={'item-' + index}>
                    <NavLink activeClassName="active-link" href={item.path}>
                      <div className="sidebar-link">
                        {item.icon}
                        <span className="link-text">{item.name}</span>
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Scrollbars>
      </div>
    </Navbar>
  );
};

export default Sidebar;
