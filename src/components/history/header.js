import React from "react";
import Menu from "../../img/menu.png";
import { connect } from "react-redux";
import { clickLeftBarCreator } from "../../redux/actions/animate";

const Header = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <nav className="nav header shadow bt">
            <button className="nav-item  mr-auto ml-1">
              <img alt="pic" src={Menu} onClick={props.clickLeftBarCreator} />
            </button>
            <h1>History</h1>
            <button className="nav-item ml-auto mr-4"></button>
          </nav>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    clickLeftBarCreator: () => {
      dispatch(clickLeftBarCreator());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
