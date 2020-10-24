import {
  clickLeftBarAction,
  clickRightBarAction,
} from "../actions/actionTypes";

export const clickRightBarCreator = () => {
  return {
    type: clickRightBarAction,
    payload: null,
  };
};

export const clickLeftBarCreator = () => {
  return {
    type: clickLeftBarAction,
    payload: null,
  };
};
