
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton/LogoutButton';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/forme-logo.png';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(store => store.session.user);

  return (
    <nav className="navbar-container">
      <NavLink to='/' exact={true} activeClassName='active' className="navbar-links-home">
        <img className="navbar-logo" src={logo} alt="\A"/>
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to='/users' exact={true} activeClassName='active' className="navbar-link">
            Users
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-auth-links">
      <li>
          {user === null ?
          (
          <NavLink to='/sign-up' exact={true} className="navbar-auth-links-signup">
            <span className="navbar-signup-text">
              Sign Up
            </span>
          </NavLink>
          )
          :
          null
          }
      </li>
      {user === null ?
      (<li>
          <NavLink to='/login' exact={true} className="navbar-auth-links-login">
            <span className="navbar-login-text" onMouseEnter={(e) => e.target.innerText="RAWRR!"} onMouseLeave={(e) => e.target.innerText="Login"}>
              Login
            </span>
          </NavLink>
      </li>
      )
      :
      (<li>
        <LogoutButton/>
      </li>)
      }
      </ul>
    </nav>
  );
}

export default NavBar;
