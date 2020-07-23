import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';

const Recipes = () => {
  // const APP_ID = '4b6d17d8';
  // const APP_KEY = 'd6d64d5899a23dfcaeea500b1b4ae695';
  // const response = await fetch(
  //   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  // );
  // const data = await response.json();
  const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Search
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Recipes;
