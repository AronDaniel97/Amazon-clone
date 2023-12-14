import React from "react";
import "./ChecProduct.css";
import { useStateValue } from "./State";
function ChecProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue() ;
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
        
    }
  return (
    <div className="checProduct">
      <img
        className="checProduct__image"
        src={image}
      />
      <div className="checProduct__info">
        <p className="checProduct__title">{title}</p>
        <p className="checProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default ChecProduct;
