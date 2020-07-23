import React, { Component } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

export default class Default extends Component {
  render() {
    return (
      <Header title='404' styleClass='default-hero'>
        <h2 className='text-uppercase text-light'>
          You are in the wrong place
        </h2>
        <NavLink
          to='/'
          className='text-uppercase btn btn-secondary btn-lg mt-3'
        >
          Return Home
        </NavLink>
      </Header>
    );
  }
}
