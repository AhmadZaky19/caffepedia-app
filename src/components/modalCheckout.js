import React from "react";
import jwt from "jsonwebtoken";
// import Axios from "axios";
import { connect } from "react-redux";
import {
  addTransactionCreator,
  cancelCartCreator,
} from "../redux/actions/menuAndCart";

const ModalCheckout = (props) => {
  const getDate = new Date().getDate().toString();
  const getMil = new Date().getMilliseconds().toString();
  const invoice = getDate + getMil;

  const token = window.localStorage.getItem("token");
  const decode = jwt.decode(token);
  const user = decode.username;
  console.log(decode);

  const cart = props.menuAndCart.cart.map((cart) => {
    return cart.name;
  });
  const price = props.menuAndCart.cart.map((el) => {
    return el.price * el.quantity;
  });
  const total = price.reduce((total, index) => {
    return total + index;
  }, 0);

  const ppn = total * (10 / 100);
  const totalPpn = total + ppn;

  return (
    <>
      <div
        className="modal fade checkout"
        id="checkout"
        tabIndex="-1"
        aria-labelledby="checkout"
        aria-hidden="true"
        key="menu"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row ml-1 mr-1">
                <div className="col-6 d-flex justify-content-start flex-column">
                  <h4>Checkout </h4>
                  <p className="font-weight-normal">Cashier: {user}</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <h5>Receipt no: #{invoice}</h5>
                </div>
              </div>
              <div className="row ml-1 mr-1"></div>
              {props.menuAndCart.cart.map((cart) => {
                return (
                  <>
                    <div className="row ml-1 mr-1" key={cart.id_menu}>
                      <div className="col-6 d-flex justify-content-start">
                        <p>
                          {cart.name} {cart.quantity}x
                        </p>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <p>Rp. {cart.price * cart.quantity}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="row ml-1 mr-1">
                <div className="col-6 d-flex justify-content-start">
                  <p>Ppn 10%</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <p>Rp. {ppn}</p>
                </div>
              </div>
              <div className="row ml-1 mr-1">
                <div className="col-4 d-flex justify-content-start"></div>
                <div className="col-8 d-flex justify-content-end">
                  <p>Total: Rp. {totalPpn}</p>
                </div>
              </div>
              <div className="row ml-1 mr-1">
                <div className="col-6 d-flex justify-content-start">
                  Payment: Cash
                </div>
                <div className="col-6 "></div>
              </div>
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-pink btn-lg btn-block "
                data-dismiss="modal"
                onClick={() => {
                  props.addTransactionCreator(
                    invoice,
                    user,
                    cart.toString(),
                    totalPpn
                  );
                  props.cancelCartCreator();
                }}
              >
                Print
              </button>
              <button
                type="button"
                className="btn btn-blue btn-lg btn-block"
                data-dismiss="modal"
                onClick={() => {
                  props.addTransactionCreator(
                    invoice,
                    user,
                    cart.toString(),
                    totalPpn
                  );
                  props.cancelCartCreator();
                }}
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
    addTransactionCreator: (invoice, cashier, order, amount) => {
      dispatch(addTransactionCreator(invoice, cashier, order, amount));
    },
    cancelCartCreator: () => {
      dispatch(cancelCartCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCheckout);
