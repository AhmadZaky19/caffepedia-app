import {
  getMenu,
  searchMenu,
  addTrans,
  getHistory,
  insertMenu,
  getMoreMenu,
  deleteMenu,
  editMenu,
} from "../../utils/http";
import {
  getMenuAction,
  searchMenuAction,
  addCartAction,
  plusQuantityAction,
  minQuantityAction,
  cancelCartAction,
  addTransAction,
  getHistoryAction,
  insertMenuAction,
  addMenuEdit,
  getMoreAction,
  deleteMenuAction,
  editMenuAction,
  clearAction,
} from "./actionTypes";

export const getMenuCreator = () => {
  return {
    type: getMenuAction,
    payload: getMenu(),
  };
};

export const getMoreMenuCreator = (page) => {
  return {
    type: getMoreAction,
    payload: getMoreMenu(page),
  };
};

export const searchMenuCreator = (name, by) => {
  console.log(name, by);
  return {
    type: searchMenuAction,
    payload: searchMenu(name, by),
  };
};
export const insertMenuCreator = (name, picture, price, id_category) => {
  console.log(name);
  return {
    type: insertMenuAction,
    payload: insertMenu(name, picture, price, id_category),
  };
};

export const addCartCreator = (id, name, price, img) => {
  return {
    type: addCartAction,
    payload: {
      id_menu: id,
      name: name,
      quantity: 1,
      price: price,
      picture: img,
    },
  };
};

export const plusQuantityCreator = (id) => {
  return {
    type: plusQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};
export const minQuantityCreator = (id) => {
  return {
    type: minQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};
export const cancelCartCreator = () => {
  return {
    type: cancelCartAction,
    payload: null,
  };
};

export const addTransactionCreator = (invoice, cashier, orders, amount) => {
  return {
    type: addTransAction,
    payload: addTrans(invoice, cashier, orders, amount),
  };
};

export const getHistoryCreator = () => {
  return {
    type: getHistoryAction,
    payload: getHistory(),
  };
};

export const addMenuEditCreator = (id, name, price, img, id_cat) => {
  return {
    type: addMenuEdit,
    payload: {
      id_menu: id,
      name: name,
      quantity: 1,
      price: price,
      picture: img,
      id_category: id_cat,
    },
  };
};

export const deleteMenuCreator = (id) => {
  return { type: deleteMenuAction, payload: deleteMenu(id) };
};

export const clearCreator = () => {
  return {
    type: clearAction,
  };
};
export const editMenuCreator = (name, picture, price, id_category, id_menu) => {
  return {
    type: editMenuAction,
    payload: editMenu(name, picture, price, id_category, id_menu),
  };
};
