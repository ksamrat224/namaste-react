import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="Logo" />
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us </li>
                <li>Cart</li>
              </ul>
            </div>
        </div>

    );
}

const RestaurantCard = () => {
  return (
      <div className="res-card"> 
        <img
        className="res-logo"  
        alt="biryani" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"/>
        <h3>Meghana Foods</h3>
        <h4>Biryani,North Indian,Asia</h4>
        {/* <h4>4.4 stars</h4>
        <h4>35 Minutes</h4> */}
      </div>
  );
}

const Body = () => {
  return (
    <div className="body ">
      <div className="search">Search</div>
      <div className="res-container"> </div>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>
  );
}

const AppLayout = () => {
  return (
     <div className="app">
      <Header/> 
      <Body/>
     </div>
  );
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
