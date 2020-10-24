import React from "react";
import CartHeader from "./cartHeader";
import CartList from "./cartList";
import { connect } from "react-redux";

const RightBar = (props) => {
  return (
    <>
      <div
        className={
          props.animate.rightBarDisplay
            ? "col-md-4 cartBar show"
            : "col-md-4 cartBar"
        }
      >
        <CartHeader />
        <CartList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { animate } = state;
  return {
    animate,
  };
};

export default connect(mapStateToProps, null)(RightBar);
