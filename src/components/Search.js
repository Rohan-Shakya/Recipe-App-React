import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ search, handleChange, handleSubmit }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
          <h1 className='text-slanted text-capitalize'>
            Search Recipes with
            <strong className='text-danger'> myRecipe</strong>
          </h1>
          <form className='mt-4' onSubmit={handleSubmit}>
            <label htmlFor='search' className='text-capitalize'>
              Type for recipes you want
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='search'
                className='form-control'
                placeholder='eg. chicken'
                value={search}
                onChange={handleChange}
              />
              <div className='input-group-append'>
                <button type='submit' className='btn btn-primary'>
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
