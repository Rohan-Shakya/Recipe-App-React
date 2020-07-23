import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <NavLink to='/' className='navbar-brand'>
        <h1 className='font-italic text-slanted'>
          Food<span className='text-danger'>2Fork</span>
        </h1>
      </NavLink>
      <div className='collapse navbar-collapse show ml-sm-5'>
        <ul className='navbar-nav '>
          <li className='navbar-item '>
            <NavLink
              to='/'
              exact
              activeClassName='nav-active'
              className='nav-link'
            >
              Home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink
              exact
              activeClassName='nav-active'
              to='/recipes'
              className='nav-link'
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
