import React from "react";
import EmptyCart from "../components/empty-cart";
import { connect } from "react-redux";
import {
  plusQuantityCreator,
  minQuantityCreator,
  cancelCartCreator,
} from "../redux/actions/menuAndCart";

require("../css/cart.css");

const CartList = (props) => {
  const price = props.menuAndCart.cart.map((el) => {
    return el.price * el.quantity;
  });
  const total = price.reduce((total, index) => {
    return total + index;
  }, 0);

  if (props.menuAndCart.cart.length) {
    return (
      <>
        <div className="row" key="kk">
          <div className="col-12 right-bar">
            {props.menuAndCart.cart.map((cart) => {
              return (
                <div className="row m-4 list-cart" key={cart.id_menu}>
                  <div className="col-sm-4 col-md-4 cart-item ">
                    <div className="img-cart">
                      <img src={cart.picture} className="pic" alt="pic" />
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="name-cart">
                      <p>{cart.name}</p>
                      <div className="counter">
                        <button
                          onClick={() => props.minQuantityCreator(cart.id_menu)}
                        >
                          -
                        </button>
                        <span>{cart.quantity}</span>
                        <button
                          onClick={() =>
                            props.plusQuantityCreator(cart.id_menu)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 d-flex align-items-end justify-content-center">
                    <div className="price-cart">
                      <p className="m-1">Rp.{cart.price * cart.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="checkout">
              <div className="row m-4 checkout">
                <div className="col-12 d-flex justify-content-between mt-1 ">
                  <h3 className="">Total:</h3>
                  <h3>Rp. {total}</h3>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-12 text-left">
                  <p>*Belum termasuk Ppn</p>
                </div>
              </div>
              <div className="row mt-2 btn-cart text-center">
                <div className="col-12 btn-check-cancel">
                  <button
                    type="button"
                    className="btn btn-pink btn-lg btn-block mb-3"
                    data-toggle="modal"
                    data-target="#checkout"
                  >
                    Checkout
                  </button>
                  <button
                    type="button"
                    className="btn btn-blue btn-lg btn-block mb-3"
                    onClick={props.cancelCartCreator}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <EmptyCart />;
  }
};
const mapStateToProps = (state) => {
  const { menuAndCart } = state;
  return {
    menuAndCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusQuantityCreator: (id) => {
      dispatch(plusQuantityCreator(id));
    },
    minQuantityCreator: (id) => {
      dispatch(minQuantityCreator(id));
    },
    cancelCartCreator: () => {
      dispatch(cancelCartCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
