import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingleRecipe = (props) => {
  const { match } = props;

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.edamam.com/search?q=${match.params.name}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        const result = responseData.hits.find((item) => {
          return Number(match.params.id) === Number(item.recipe.calories);
        });

        // setRecipe(result);

        setLoading(false);
        setImage(result.recipe.image);
        setIngredients(result.recipe.ingredients);
        setUrl(result.recipe.url);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [match.params.name, match.params.id]);

  if (loading) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h2 className='text-uppercase text-orange text-center'>
              Loading Recipe ...
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Link to='/recipes' className='btn btn-warning mb-5 text-capitalize'>
            Back to Recipes List
          </Link>
          <img
            src={image}
            alt='recipe'
            className='d-block w-100 img-thumbnail'
            style={{ maxHeight: '30rem' }}
          />
        </div>

        <div className='col-10 mx-auto col-md-6 my-3'>
          <h6 className='text-warning text-capitalize text-slanted'>
            Provided by Publisher
          </h6>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mt-2 text-capitalize'
          >
            Publisher Webpage
          </a>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-success mt-2 mx-2 text-capitalize'
          >
            Recipe Url
          </a>
          <ul className='list-group mt-4'>
            <h2 className='mt-3 mb-4'>Ingredients</h2>
            {ingredients.map((item, index) => {
              return (
                <li key={index} className='list-group'>
                  <div className='list-group-item'>{item.text}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
