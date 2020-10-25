import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import loading from "../img/spinner.svg";

import {
  getMenuCreator,
  addCartCreator,
  getMoreMenuCreator,
  addMenuEditCreator
} from "../redux/actions/menuAndCart";

const Thick = require("../img/thick-figma.png");

const FoodItem = ({ handleShow }) => {
  const { menuAndCart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const token = window.localStorage.getItem("token");
  const decode = jwt.decode(token);
  const level = decode.id_level;

  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getMenuCreator());
  }, []);

  useEffect(() => {
    if (menuAndCart.status.affectedRows !== 0) {
      dispatch(getMenuCreator());
      //   dispatch(clearCreator())
    }
  }, [menuAndCart.status]);

  const fetchMore = () => {
    setPage(page + 1);
    setTimeout(() => {
      dispatch(getMoreMenuCreator(page));
    }, 2000);
  };

  return (
    <>
      {menuAndCart.isPending ? (
        <div className="items empty d-flex align-items-center bg-transparent">
          <div className="empty-cart">
            <img src={loading} alt=""></img>
          </div>
        </div>
      ) : menuAndCart.data.length ? (
        <div className="items">
          <div className="row">
            {menuAndCart.data.map((menu) => {
              return (
                <div
                  className="col-12 col-sm-6 col-lg-4 food"
                  key={menu.id_menu}
                >
                  <div className="card bg-transparent">
                    <div className="image-card">
                      <img
                        src={menu.picture}
                        className="img-card"
                        alt=" food"
                        onClick={() => {
                          if (level !== null && level === 2) {
                            handleShow();
                            dispatch(
                              addMenuEditCreator(
                                menu.id_menu,
                                menu.name,
                                menu.price,
                                menu.picture,
                                menu.id_category
                              )
                            );
                          } else {
                            dispatch(
                              addCartCreator(
                                menu.id_menu,
                                menu.name,
                                menu.price,
                                menu.picture
                              )
                            );
                          }
                        }}
                      />
                      <div className="checklist">
                        <img alt="thick" src={Thick} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{menu.name}</h5>
                      <p>Rp. {menu.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="items empty d-flex align-items-center">
          <div className="empty-cart">
            <h2>Menu is Unavailable</h2>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                dispatch(getMenuCreator());
              }}
            >
              See All Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
