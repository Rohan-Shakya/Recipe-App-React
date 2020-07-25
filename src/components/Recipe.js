import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  let { image, label, url, source, calories, totalTime } = recipe;
  return (
    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
      <div className='card' style={{ height: '100%' }}>
        <img
          src={image}
          alt={image}
          style={{ height: '14rem' }}
          className='img-card-top img-thumbnail'
        />
        <div className='card-body text-capitalize'>
          <h5 className='font-weight-bold'>{label}</h5>
          <h6 className='text-primary  text-slanted'>By {source}</h6>
          <span className='d-block text-danger'>Time: {totalTime} min</span>
        </div>
        <div className='card-footer d-flex justify-content-around align-items-center'>
          <Link
            to={`/recipes/${label}/${calories}`}
            className='btn btn-danger text-capitalize'
          >
            GET THE RECIPE
          </Link>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-success mx-2 text-capitalize'
          >
            Recipe Url
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
