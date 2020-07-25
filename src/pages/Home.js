import React, { Component } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <Header title='Explore the delicious world of international recipes.'>
        <NavLink
          exact
          activeClassName='nav-active'
          to='/recipes'
          className='text-uppercase btn btn-danger btn-lg mt-3'
        >
          <FaSearch /> <span className='px-2'> Search Recipes</span>
        </NavLink>
      </Header>
    );
  }
}
