import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <>
      <div className='container py-5'>
        {/* title */}
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
            <h1 className='text-slanted'>Recipe List</h1>
          </div>
        </div>
        {/* end of title */}
        <div className='row'>
          {recipes.map((recipe) => (
            <Recipe key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
