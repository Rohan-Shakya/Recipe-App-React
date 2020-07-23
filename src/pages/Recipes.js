import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const APP_ID = '4b6d17d8';
  const APP_KEY = 'd6d64d5899a23dfcaeea500b1b4ae695';

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

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
