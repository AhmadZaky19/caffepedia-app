import { logoutAction } from "../actions/actionTypes";

export const logoutCreator = () => {
  return {
    type: logoutAction,
    payload: null,
  };
};
