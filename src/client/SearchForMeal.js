import React from 'react'



const SearchForMeals = ({ search, setSearch }) => {




    return (
        <div>
            <input type='text' placeholder="Meal search" value={search} onChange={(e) => setSearch(e.target.value)} />


        </div>
    )
}

export default SearchForMeals