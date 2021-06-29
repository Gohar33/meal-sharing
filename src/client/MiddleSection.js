import React from 'react'
import food from './assets/images/food.png'
import './Home.css'

const MiddleSection = () => {
    return (
        <div className="middle-section">
            <h1>Try the best food in Copenhagen</h1>
            <p>Welcome to our Meal-Sharing restaurant, the best Italian restaruant in the town.</p>
            <p>If you want to taste piece of Italy, then you're in the right place.</p>
            <p>We have yummy Italian food cooked by our Italian chefs and delicious assortiment of Italian wines. </p>
            <img className="middle-image" src={food} ></img>
        </div>
    )
}

export default MiddleSection