import React from "react";
import "./car.css";
import CarHeart from "../../assets/img/icons/heart.png";

const Car = ({img, name, price}) => {
  return (
    <div className="car">
      <div className="car_img">
        <img src={img} className="w-100" alt="Car" />
      </div>
      <div className="car_container">
        <h3 className="car_name">{name}</h3>
        <p className="car_price">${price}</p>
        <div className="d-flex">
          <button className="car_show-btn">Show details</button>
          <button className="car_heart-btn">
            <img src={CarHeart} alt="Car Heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
