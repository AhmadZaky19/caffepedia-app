import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMenuCreator } from "../redux/actions/menuAndCart";

const ModalEdit = () => {
  const { menuAndCart } = useSelector((state) => state);
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);
  const [id_cat, setId_cat] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      editMenuCreator(name, image, price, price, menuAndCart.dataEdit.id_menu)
    );
    console.log(name, image, price, id_cat, menuAndCart.dataEdit.id_menu);
  };

  return (
    <>
      <div
        className="modal add fade"
        id="modal-edit"
        tabIndex="-1"
        aria-labelledby="modal-add"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-add">
                Edit Menu
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
                    defaultValue={menuAndCart.dataEdit.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="image">Image</label>
                </div>
                <div className="col-10">
                  <input
                    className="form-control-file shadow"
                    name="picture"
                    type="file"
                    id="image"
                    autoComplete="off"
                    defaultValue={menuAndCart.dataEdit.picture}
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
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
                    defaultValue={menuAndCart.dataEdit.price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
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
                    defaultValue={menuAndCart.dataEdit.id_category}
                    onChange={(e) => setId_cat(e.target.value)}
                  >
                    <option value="1">Drink</option>
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
                onClick={() => {
                  handleSubmit();
                }}
                data-dismiss="modal"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
