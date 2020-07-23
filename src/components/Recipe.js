import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const { image, label, url, source } = recipe;
  return (
    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
      <div className='card' style={{ height: '100%' }}>
        <img
          src={image}
          alt={image}
          style={{ height: '14rem' }}
          className='img-card-top'
        />
        <div className='card-body text-capitalize'>
          <h5>{label}</h5>
          <h6 className='text-warning text-slanted'>provided by {source}</h6>
        </div>
        <div className='card-footer'>
          <Link
            to={`/recipes/${source}`}
            className='btn btn-primary text-capitalize'
          >
            Details
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
