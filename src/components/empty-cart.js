import React from "react";
const cart = require("../img/chart.png");
require("../css/cart.css");

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart">
        <img alt="cart" className="img-fluid" src={cart} />
        <h3>Your cart is empty</h3>
        <p className="text-muted">Please add some items from the menu</p>
      </div>
    </>
  );
};
export default EmptyCart;
