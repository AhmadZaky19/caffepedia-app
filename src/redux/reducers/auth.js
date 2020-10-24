import { logoutAction } from "../actions/actionTypes";
const initialState = {
  token: null,
};

const logout = (state = initialState, { type, payload }) => {
  switch (type) {
    case logoutAction:
      return {
        ...state,
        token: window.localStorage.removeItem("token"),
      };
    default:
      return state;
  }
};
export default logout;
