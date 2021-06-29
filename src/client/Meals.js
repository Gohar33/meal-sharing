import React, { useState, useEffect } from 'react'
import NavBar from './NavBar.js'
import './Home.css'
import images from './images.js'


import {
    BrowserRouter as
        Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MealsWithID from './MealsWithID';
import SearchForMeal from './SearchForMeal.js';



const Meals = ({ meals, setMeals }) => {

    const [search, setSearch] = useState("")

    let { path, url } = useRouteMatch();

    useEffect(() => {
        async function DataFetched() {
            let ApiUrl = "";
            if (search.length > 0) {
                ApiUrl = `/api/meals?title=${search}`
            } else {
                ApiUrl = "/api/meals"
            }

            const fetchdata = await fetch(ApiUrl)
            const responseFetch = await fetchdata.json()
            setMeals(responseFetch)
        }

        DataFetched()

    }, [search])

    return (
        <div>
            <NavBar />
            <div className="search-meal">
                <SearchForMeal search={search} setSearch={setSearch} />
            </div>
            <div className="card-wrap">

                {meals.map((meal) => {
                    const mealImages = images.find((img) => img.id === meal.id)
                    // let fileName = `/public/${meal.id}.png`;
                    return <div key={meal.id}>
                        < Card style={{ width: '18rem' }} className="meals-order" >
                            <Card.Img variant="top" src={mealImages.img} className="meal-image" />
                            {/* <Card.Img variant="top" src={fileName} className="meal-image" /> */}
                            <Card.Body >
                                <Card.Title>{meal.title} </Card.Title>
                                <Card.Text>{meal.description} </Card.Text>
                                <Card.Text>Location: {meal.location} </Card.Text>
                                <Card.Text>Price: {meal.price} DKK</Card.Text>
                                <Link to={`${url}/${meal.id}`}>
                                    <Button variant="primary" className="card-button">Book a Seat</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                }
                )

                }
                < Switch >
                    <Route path={`${path}/:id`}>
                        <MealsWithID meals={meals} />
                    </Route>
                </Switch>
            </div >
        </div>
    )
}

export default Meals