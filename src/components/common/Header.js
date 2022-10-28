import { NavLink } from 'react-router-dom';
import React from 'react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

import {
  MobileOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from '@ant-design/icons';

function AppHeader() {
  return (
    <div className="container">
      {/* topbar */}
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <a href="tel:07450223366">
                <MobileOutlined /> <span>+385995965406</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@grocery.co.uk">
                <MailOutlined /> <span>mario.marasovic@fer.hr</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a href="https://www.google.com">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <TwitterSquareFilled />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <InstagramFilled />
              </a>
            </li>
          </ul>{' '}
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
      {/* header */}
      <div className="header separator">
        <div className="logo">Croatian Premier League</div>
        <nav className="mobileHidden">
          <ul>
            {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
            <li>
              <NavLink to="/demo/react/antdesign/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/demo/react/antdesign/matches">Matches</NavLink>
            </li>
            <li>
              <NavLink to="/demo/react/antdesign/news">News</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
