import React, { useState } from "react";
import './App.css';
import RestaurentCard from './RestaurentCard';
import restaurent_data from './mock_data';

function Body() {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurent_data);

  function OnChangeEvent(e) {
    setSearchText(e.target.value);
  }

  function filterRestaurants() {
    const data = restaurent_data.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchText.toLowerCase()); 
    });
    setFilteredRestaurants(data);
  }

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Enter food to search" className="search-input" onChange={OnChangeEvent} />
        <button className="submit-button" onClick={filterRestaurants}>Submit</button>
      </div>
      <div className="total-cards">
        {
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurentCard
                key={restaurant.id}
                restaurent_details={restaurant}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default Body;
