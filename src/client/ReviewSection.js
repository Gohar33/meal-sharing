import React, { useState, useEffect } from 'react'
import NavBar from './NavBar.js'
import './Home.css'

const API = "http://localhost:5000/api/reviews";

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
                    return (
                        <div className="review-list" key={review.id}>
                            <h2>{review.title}</h2>
                            <h5>{review.description}</h5>
                            <p>{review.stars}</p>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}

export default ReviewSection