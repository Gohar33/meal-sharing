import React, { useState } from 'react'
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './MealsWithID.css'

function showCurrentDate() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    console.log(dateTime)
    return dateTime;
}

const ReservationForms = (props) => {
    console.log(props)
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [guest, setGuest] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        postNewMeal()
    };

    function postNewMeal() {
        (async () => {
            await fetch('/api/reservations', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contact_name: name,
                    contact_phonenumber: phoneNumber,
                    meal_id: props.mealId,
                    created_date: showCurrentDate(),
                    number_of_guests: guest,
                    contact_email: email,
                })
            })
        })();
    }

    return (
        <div className="form-wrapper">

            <Form className="form">

                <Form.Group controlId="formBasicName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone number" />
                </Form.Group>

                <Form.Group controlId="formBasicGuest">
                    <Form.Label>Guest Number</Form.Label>
                    <Form.Control as="select" type="guest" value={guest} onChange={(e) => setGuest(e.target.value)} placeholder="Enter number of guests" >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button className="form-button" variant="primary" type="submit" onClick={onSubmit}> Submit </Button>
            </Form>

            <Link className="back" to="/meals">Go back</Link>
        </div >
    )
}

export default ReservationForms;