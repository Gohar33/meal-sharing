import React from 'react'

// import { faWineGlassAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="navBar">
                {/* <div > */}
                {/* <FontAwesomeIcon icon={faWineGlassAlt} size="2x" transform="down-4 right-26" /> */}
                {/* <div>
                    <h1 className="title">Meal Sharing</h1>
                </div> */}

                <Navbar.Brand >Meal-Sharing</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="flexElements"
                        activeKey="/home">

                        <Nav.Item className="nav-items">
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
        // </div >)
    )
}

export default NavBar;