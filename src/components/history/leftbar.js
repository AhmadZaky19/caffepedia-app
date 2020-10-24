import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import { logoutCreator } from "../../redux/actions/auth";

const fork = require("../../img/fork.png");
const clipboard = require("../../img/clipboard.png");
const add = require("../../img/add.png");
const logout = require("../../img/logout2.png");

const LeftBar = (props) => {
  const token = window.localStorage.getItem("token");
  const decode = jwt.decode(token);
  const level = decode.id_level;

  return (
    <>
      <aside
        className={
          props.animate.leftBarDisplay
            ? "left-bar pt-3 shadow hide"
            : "left-bar pt-3 shadow"
        }
      >
        <ul className="nav flex-column">
          <li className="nav-item pl-auto">
          <Link to="/">
            <button className="nav-link bg-transparent" href="">
              <img src={fork} alt="" />
            </button>
            </Link>
          </li>
          <li className="nav-item ">
            <button className="nav-link bg-transparent" href="">
              <img src={clipboard} alt="" />
            </button>
          </li>
          <li
            className={
              level !== null && level === 2 ? "nav-item add" : "nav-item add"
            }
          >
            <button className="nav-link  bg-transparent" href="#">
              <img
                src={add}
                alt=""
                data-toggle="modal"
                data-target="#modal-add"
              />
            </button>
          </li>
          <li className="nav-item ml-2">
            <Link to="/">
              <button className="nav-link bg-transparent">
                <img alt="clip" src={logout} onClick={props.logoutCreator} />
              </button>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
const mapStateToProps = (state) => {
  const { animate } = state;
  return {
    animate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutCreator: () => {
      dispatch(logoutCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
