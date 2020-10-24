import React from "react";
import Axios from "axios";

class ModalAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      dataMenu: {
        name: "",
        picture: null,
        price: null,
        id_category: null,
      },
    };
  }

  handleForm = (event) => {
    const newDataMenu = { ...this.state.dataMenu };
    newDataMenu[event.target.name] = event.target.value;
    this.setState({
      dataMenu: newDataMenu,
    });
  };
  handleSubmit = () => {
    const queryAdd = process.env.REACT_APP_INSERT_MENU;
    Axios.post(queryAdd, this.state.dataMenu)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div
          className="modal add fade"
          id="modal-add"
          tabIndex="-1"
          aria-labelledby="modal-add"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-add">
                  Add Menu
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="col-10">
                    <input
                      className="form-control shadow"
                      name="name"
                      type="text"
                      id="name"
                      autoComplete="off"
                      onChange={this.handleForm}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="image">Image</label>
                  </div>
                  <div className="col-10">
                    <input
                      className="form-control shadow"
                      name="picture"
                      type="text"
                      id="image"
                      autoComplete="off"
                      onChange={this.handleForm}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="price">Price</label>
                  </div>
                  <div className="col-10">
                    <input
                      className="form-control shadow price"
                      name="price"
                      type="number"
                      id="price"
                      autoComplete="off"
                      onChange={this.handleForm}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="cat">Category</label>
                  </div>
                  <div className="col-10">
                    <select
                      className="form-control shadow category"
                      name="id_category"
                      id="cat"
                      autoComplete="off"
                      onChange={this.handleForm}
                    >
                      <option defaultValue="1">Drink</option>
                      <option value="2">Food</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn  btn-pink btn-cancel"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-blue btn-add"
                  onClick={this.handleSubmit}
                  data-dismiss="modal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalAdd;
