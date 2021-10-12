import React, { useState, useEffect } from 'react'
import NavBar from './NavBar.js'
import images from './images.js'
import StarRatingComponent from 'react-star-rating-component'

import './Home.css'

const API = "/api/reviews";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function FetchReview() {
            const fetchData = await fetch(API)
            const reviewFetch = await fetchData.json()
            setReviews(reviewFetch)
        }
        FetchReview()
    }, [])


    console.log(reviews)
    return (
        <div>
            <NavBar />

            <div className="review-wrap">

                {reviews.map((review) => {
                    const mealImages = images.find((img) => img.id === review.id)

                    return (
                        <div className="review-list" key={review.id}>
                            <img src={mealImages.img} className="meal-image" />
                            <h2>{review.title}</h2>
                            <h5>{review.description}</h5>

                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    starCount={review.stars}
                                    value={5}
                                    className="stars" />
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}

export default ReviewSection