import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  // const APP_ID = '4b6d17d8';
  // const APP_KEY = 'd6d64d5899a23dfcaeea500b1b4ae695';
  // const response = await fetch(
  //   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  // );
  // const data = await response.json();

  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/recipes/:id' component={SingleRecipe} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
