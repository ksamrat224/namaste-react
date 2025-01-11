import React from "react";
import RestauruntCard from "./RestauruntCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) =>(
          <RestauruntCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;