import React from "react";
import { connect } from "react-redux";
import { clickRightBarCreator } from "../redux/actions/animate";

const close = require("../img/close.png");

require("../css/cart.css");

const Cart = (props) => {
  return (
    <div className="row">
      <div className="col-12 cart shadow">
        <ul className="nav justify-content-center mr-auto">
          <li className="nav-item">
            <button className="close">
              <img
                src={close}
                alt="close"
                className="close-btn"
                onClick={props.clickRightBarCreator}
              ></img>
            </button>
          </li>
        </ul>
        <ul className="nav mr-auto mt-1">
          <li className="nav-item center">
            <p>
              Cart{" "}
              <span className="badge">{props.menuAndCart.cart.length}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { menuAndCart } = state;
  return {
    menuAndCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clickRightBarCreator: () => {
      dispatch(clickRightBarCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
