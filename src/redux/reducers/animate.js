import {
  clickLeftBarAction,
  clickRightBarAction,
} from "../actions/actionTypes";

const initialState = {
  rightBarDisplay: false,
  leftBarDisplay: false,
};

const animate = (prevState = initialState, { type }) => {
  switch (type) {
    case clickRightBarAction:
      return {
        ...prevState,
        rightBarDisplay: !prevState.rightBarDisplay,
      };
    case clickLeftBarAction:
      return {
        ...prevState,
        leftBarDisplay: !prevState.leftBarDisplay,
      };
    default:
      return prevState;
  }
};

export default animate;
