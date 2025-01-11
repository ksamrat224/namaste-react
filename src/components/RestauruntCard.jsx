const RestauruntCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="restro-card" style={{ backgroundColor: "#d6d6d6" }}>
        <img
          alt="res-logo"
          className="res-logo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-T18X_5AyoOkK5QEu5RVU1nPuYpxcTc0Pqg&s" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>Rs{costForTwo / 100}FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestauruntCard;