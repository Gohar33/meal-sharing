import React from 'react'


import MiddleSection from './MiddleSection.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="image-container">
                <img className="image" src="https://fullsuitcase.com/wp-content/uploads/2020/06/Authentic-Italian-food-by-region.jpg" />
                <h1 className="image-text">Welcome to Meal-Sharing</h1>
            </div>
            <MiddleSection />
            <Footer />


        </div >

    )

}

export default Home