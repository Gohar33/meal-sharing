import React, { useState, useEffect } from 'react'
import StarRatingComponent from 'react-star-rating-component'
// import Rating from 'react-simple-star-rating';
import NavBar from './NavBar.js'
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
                    let fileName = `/public/${review.id}.png`;
                    return (
                        <div className="review-list" key={review.id}>
                            <img src={fileName} className="meal-image" />
                            <h2>{review.title}</h2>
                            <h5>{review.description}</h5>

                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    starCount={review.stars}
                                    value={4}
                                    className="stars"
                                />
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