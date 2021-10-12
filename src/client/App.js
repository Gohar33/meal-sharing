import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Meals from './Meals';
import MealsWithID from './MealsWithID'
import ReviewSection from './ReviewSection'

import "./App.css"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([])

  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/meals">
          <Meals meals={meals} setMeals={setMeals} />
        </Route>

        <Route exact path="/meals/:id">
          <MealsWithID meals={meals} setMeals={setMeals} />
        </Route>

        <Route exact path="/reviews">
          <ReviewSection reviews={reviews} setReviews={setReviews} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
