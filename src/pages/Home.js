import React, { Component } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Header title='amazing recipes'>
        <NavLink
          exact
          activeClassName='nav-active'
          to='/recipes'
          className='text-uppercase btn btn-secondary btn-lg mt-3'
        >
          Search Recipes
        </NavLink>
      </Header>
    );
  }
}
