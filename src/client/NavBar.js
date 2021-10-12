import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="navBar">
                <Navbar.Brand >Meal-Sharing</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="justify-content-end w-100" activeKey="/home">

                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/meals">Meals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/reviews">Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>


            </Navbar >
        </div >
    )
}

export default NavBar;