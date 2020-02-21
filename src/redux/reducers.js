import { combineReducers } from "redux";

const user = (state = null) => state;

// add switch statements in here

const cars = (state = [], action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.value];

    case "REMOVE_CAR":
      const newState = [...state];
      const carToDelete = newState.find(objects => objects.id === action.value);
      const carToDeleteIndex = newState.indexOf(carToDelete);
      newState.splice(carToDeleteIndex, 1);
      return newState;

    default:
      return state;
  }
};

export default combineReducers({ user, cars });
