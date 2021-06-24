import React, { useState, useEffect } from 'react'
import ReservationForms from './ReservationForms.js'
import './MealsWithID.css'


const ShowReservations = (props) => {
    console.log(props.mealId)
    const [show, setShow] = useState(false)
    const [reservation, setReservation] = useState([])
    console.log(reservation)



    const AvailableMealsAPI = "http://localhost:3000/api/meals?availableReservations=true"

    useEffect(() => {
        async function AvailableMeals() {
            const fetchMeals = await fetch(AvailableMealsAPI)
            const responseFetchMeals = await fetchMeals.json()
            setReservation(responseFetchMeals)
            console.log(responseFetchMeals)
        }
        AvailableMeals()

    }, []);

    const findReservation = async () => {
        const mealReservation = await reservation.find((reservation) => (reservation.id === Number(props.mealId)))
        console.log({ mealReservation })
        if (mealReservation === undefined) {
            setShow(false)
        } else {
            const reservation_total = await mealReservation.total_reservations
            const reservation_max = await mealReservation.max_reservations
            console.log(reservation_max)
            if (reservation_total >= reservation_max) {
                setShow(false)
            } else {
                setShow(true)
            }
        }

    }
    findReservation()
    return (
        <div>
            {show === false && <h1 className="reject-text">Sorry no reservations available</h1>}

            {show && <ReservationForms mealId={props.mealId} />}


        </div>
    )
}

export default ShowReservations;