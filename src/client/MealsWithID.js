import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import ShowReservations from './ShowReservations.js'

import images from './images.js'
import './MealsWithID.css'

const API = "/api/meals"


const MealsWithId = ({ meals, setMeals }) => {

    useEffect(() => {
        async function DataFetched() {
            const fetchdata = await fetch(API)
            const responseFetch = await fetchdata.json()
            setMeals(responseFetch)
        }

        DataFetched()
    }, [])

    const params = useParams()

    const meal = meals.find((meal) => meal.id == Number(params.id))
    if (meal === undefined) {
        return null
    }
    console.log(meal.title)
    console.log(meal.id)
    const mealImages = images.find((img) => img.id === meal.id)
    return (
        <div className="show-reservation-wrapper" >
            <div className="mealsWithId-form">
                <img src={mealImages.img} className="meal-image" />
                <h1>{meal.title} </h1>
                <h3>{meal.description}</h3>
                <h3>Location: {meal.location}</h3>
                <h3>Price: {meal.price} DKK</h3>
            </div>
            <ShowReservations mealId={meal.id} />
        </div>
    )
}

export default MealsWithId