import React, { Component } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

export default class Default extends Component {
  render() {
    return (
      <Header title='404' styleClass='default-hero'>
        <h2 className='text-uppercase text-light'>
          <span role='img' aria-label='Sorry'>
            😟😟 You are in the wrong place 😔😔
          </span>
        </h2>
        <NavLink to='/' className='text-uppercase btn btn-danger btn-lg mt-3'>
          Return Home
        </NavLink>
      </Header>
    );
  }
}
