import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList  from "../utils/mockData";
const Body = () => {
  const [ListOfRestaurants,setListOfRestaurant] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=> {
          const filteredList = ListOfRestaurants.filter(
            (res) => res.data.avgRating>4
          )  
          setListOfRestaurant(filteredList);
           }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {ListOfRestaurants.map((restaurant) =>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;