import React from "react";
import { connect } from "react-redux";
import { getMenuCreator } from "../redux/actions/menuAndCart";
import {
  clickLeftBarCreator,
  clickRightBarCreator,
} from "../redux/actions/animate";

const menu = require("../img/menu.png");
const search = require("../img/search.png");
const basket = require("../img/basket.png");

const Header = (props) => {
  return (
    <>
      <div className="col-12 header shadow">
        <nav className="nav">
          <button className="nav-item ml-2 hbgr">
            <img src={menu} alt="menu" onClick={props.clickLeftBarCreator} />
          </button>
        </nav>
        <nav className="nav title">
          <h3 className="food" onClick={() => props.getMenuCreator()}>
            Food Items
          </h3>
        </nav>
        <nav className="nav">
          <button className="nav-item ">
            <img
              src={search}
              alt="search"
              data-toggle="modal"
              data-target="#modal-search"
            />
          </button>
          <button
            className="nav-item basket mr-3"
            onClick={props.clickRightBarCreator}
          >
            <span>{props.menuAndCart.cart.length}</span>
            <img src={basket} alt="search" />
          </button>
        </nav>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { menuAndCart, animate } = state;
  return {
    menuAndCart,
    animate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMenuCreator: (menuAndCart) => {
      dispatch(getMenuCreator(menuAndCart));
    },
    clickLeftBarCreator: () => {
      dispatch(clickLeftBarCreator());
    },
    clickRightBarCreator: () => {
      dispatch(clickRightBarCreator());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
