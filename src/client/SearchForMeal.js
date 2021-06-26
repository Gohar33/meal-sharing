import React from 'react'
import './App.css'


const SearchForMeals = ({ search, setSearch }) => {




    return (
        <div className="search-input">
            <input type='text' placeholder="Meal search" value={search} onChange={(e) => setSearch(e.target.value)} />


        </div>
    )
}

export default SearchForMeals