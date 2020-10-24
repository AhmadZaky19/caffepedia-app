import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="col-sm-12 col-md-4">
          <div className="card mb-3 income">
            <div className="card-body">
              <p className="title">Today's Income</p>
              <h3 className="value">Rp. 1.000.000</h3>
              <p className="prog">+2% Yesterday</p>
              <div className="round-1"></div>
              <div className="round-2"></div>
              <div className="round-3"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card mb-3 order">
            <div className="card-body">
              <p className="title">Orders</p>
              <h3 className="value">3.270</h3>
              <p className="prog">+5% Last Week</p>
              <div className="round-1"></div>
              <div className="round-2"></div>
              <div className="round-3"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card mb-3 year-income">
            <div className="card-body">
              <p className="title">This Year's Income</p>
              <h3 className="value">Rp. 100.000.000</h3>
              <p className="prog">+10% Last Year</p>
              <div className="round-1"></div>
              <div className="round-2"></div>
              <div className="round-3"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
