import Axios from "axios";

export const getMenu = () => {
  return Axios.get(process.env.REACT_APP_GET_MENU);
};

export const searchMenu = (name, by) => {
  const url = `${process.env.REACT_APP_SEARCH}?name=${name}&by=${by}`;
  return Axios.get(url);
};

export const insertMenu = (name, picture, price, id_category) => {
  const data = {
    name: name,
    picture: picture,
    price: price,
    id_category: id_category,
  };
  const url = process.env.REACT_APP_INSERT_MENU;

  return Axios.post(url, data, {
    headers: {
      "x-access-token": "bearer " + localStorage.getItem("token"),
      "Content-type": "form",
    },
  });
};

export const addTrans = (invoice, cashier, orders, amount) => {
  const data = {
    invoice: invoice,
    cashier: cashier,
    orders: orders,
    amount: amount,
  };
  const url = process.env.REACT_APP_INSERT_TRANS;
  return Axios.post(url, data, {
    headers: { "x-access-token": "bearer " + localStorage.getItem("token") },
  });
};

export const getHistory = () => {
  const url = "http://localhost:8000/history/getall";
  return Axios.get(url, {
    headers: { "x-access-token": "bearer " + localStorage.getItem("token") },
  });
};

export const getMoreMenu = (page) => {
  const url = `http://localhost:8000/?page=${page}&limit=6`;
  return Axios.get(url);
};
export const deleteMenu = (id) => {
  const url = `http://localhost:8000/?id=${id}`;
  return Axios.delete(url);
};

export const editMenu = (name, picture, price, id_category, id_menu) => {
  let data = new FormData();
  if (name !== null) {
    data.append("name", name);
  } else if (picture !== null) {
    data.append("picture", picture);
  } else if (price !== null) {
    data.append("price", price);
  } else if (id_category !== null) {
    data.append("id_category", id_category);
  }
  data.append("id_menu", id_menu);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const url = "http://localhost:8000/";
  console.log(FormData);
  return Axios.patch(url, data, config);
};
