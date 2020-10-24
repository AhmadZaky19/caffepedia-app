import {
  searchMenuAction,
  getMenuAction,
  pending,
  fulfilled,
  rejected,
  addCartAction,
  plusQuantityAction,
  minQuantityAction,
  cancelCartAction,
  addTransAction,
  getHistoryAction,
  insertMenuAction,
  getMoreAction,
  addMenuEdit,
  deleteMenuAction,
  editMenuAction,
  clearAction,
} from "../actions/actionTypes";

const initalstate = {
  data: [],
  cart: [],
  dataEdit: {},
  insertStatus: [],
  history: [],
  error: "",
  status: {},
  isPending: false,
  isfulfilled: false,
  isRejected: false,
};

const menuAndCart = (prevState = initalstate, { type, payload }) => {
  switch (type) {
    // get menu
    case getMenuAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case getMenuAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getMenuAction + fulfilled:
      return {
        ...prevState,
        isfulfilled: true,
        data: payload.data.data,
        isPending: false,
      };

    case getMoreAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case getMoreAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getMoreAction + fulfilled:
      const newData = prevState.data.concat(payload.data.data);
      return {
        ...prevState,
        isfulfilled: true,
        data: newData,
        isPending: false,
      };
    // search menu
    case searchMenuAction + pending:
      return {
        ...prevState,
        isPending: true,
      };

    case searchMenuAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case searchMenuAction + fulfilled:
      return {
        ...prevState,
        isfulfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    case insertMenuAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case insertMenuAction + rejected:
      return {
        ...prevState,
        insertStatus: payload,
        isRejected: true,
        isPending: false,
      };
    case insertMenuAction + fulfilled:
      return {
        ...prevState,
        isfulfilled: true,
        insertStatus: payload,
        isPending: false,
      };

    // CART
    case addCartAction:
      const index = prevState.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      if (index >= 0) {
        prevState.cart.splice(index, 1);
        return {
          ...prevState,
          cart: prevState.cart,
        };
      } else {
        return {
          ...prevState,
          cart: prevState.cart.concat(payload),
        };
      }
    case plusQuantityAction:
      const plusQuantity = prevState.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      let newCartPlus = [...prevState.cart];
      newCartPlus[plusQuantity] = {
        ...newCartPlus[plusQuantity],
        quantity: prevState.cart[plusQuantity].quantity + 1,
      };
      return {
        ...prevState,
        cart: newCartPlus,
      };
    case minQuantityAction:
      const minQuantity = prevState.cart.findIndex((el) => {
        return payload.id_menu === el.id_menu;
      });
      let newCartMin = [...prevState.cart];
      newCartMin[minQuantity] = {
        ...newCartMin[minQuantity],
        quantity: prevState.cart[minQuantity].quantity - 1,
      };
      if (newCartMin[minQuantity].quantity === 0) {
        prevState.cart.splice(minQuantity, 1);
        return {
          ...prevState,
          cart: prevState.cart,
        };
      } else {
        return {
          ...prevState,
          cart: newCartMin,
        };
      }

    case cancelCartAction:
      return {
        ...prevState,
        cart: [],
      };
    case addTransAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case addTransAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case addTransAction + fulfilled:
      return {
        ...prevState,
        error: payload,
        isfulfilled: true,
        isPending: false,
      };
    case getHistoryAction + rejected:
      return {
        ...prevState,
        history: payload.data.data,
        isRejected: payload,
        isPending: false,
      };
    case getHistoryAction + fulfilled:
      return {
        ...prevState,
        history: payload.data.data,
        isfulfilled: true,
        isPending: false,
      };

    case addMenuEdit:
      return {
        ...prevState,
        dataEdit: { ...payload },
      };
    case deleteMenuAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case deleteMenuAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case deleteMenuAction + fulfilled:
      return {
        ...prevState,
        isfulfilled: true,
        status: payload.data,
        isPending: false,
      };
    case editMenuAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case editMenuAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case editMenuAction + fulfilled:
      return {
        ...prevState,
        isfulfilled: true,
        status: payload.data,
        isPending: false,
      };

    case clearAction:
      return {
        ...prevState,
        isRejected: false,
        isPending: false,
        isfulfilled: false,
        status: {},
      };

    default:
      return prevState;
  }
};
export default menuAndCart;
