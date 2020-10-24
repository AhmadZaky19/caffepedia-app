import React from "react";
import { connect } from "react-redux";
import { getHistoryCreator } from "../../redux/actions/menuAndCart";

class Table extends React.Component {
  componentDidMount = () => {
    this.props.getHistoryCreator();
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 order">
            <div className="card shadow">
              <div className="card-header bg-transparent">
                <h3>Recent Order</h3>
                <select name="select" id="">
                  <option value="month">Today</option>
                  <option value="month">Yesterday</option>
                </select>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-borderless table-hover">
                  <thead className="bordered">
                    <tr>
                      <th scope="col ">INVOICES</th>
                      <th scope="col">CASHIER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">ORDERS</th>
                      <th scope="col">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.menuAndCart.history !== undefined ? (
                      this.props.menuAndCart.history.map((data) => {
                        return (
                          <tr className="font-weight-normal" key={data.invoice}>
                            <td className="font-weight-normal">
                              #{data.invoice}
                            </td>
                            <td className="font-weight-normal">
                              {data.cashier}
                            </td>
                            <td className="font-weight-normal">{data.date}</td>
                            <td className="font-weight-normal">
                              {data.orders}
                            </td>
                            <td className="font-weight-normal">
                              Rp. {data.amount}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr className="font-weight-normal" key="id">
                        <td className="font-weight-normal"></td>
                        <td className="font-weight-normal"></td>
                        <td className="font-weight-normal"></td>
                        <td className="font-weight-normal"></td>
                        <td className="font-weight-normal"></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { menuAndCart } = state;
  return {
    menuAndCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHistoryCreator: () => {
      dispatch(getHistoryCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
