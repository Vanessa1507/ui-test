import { useReducer } from "react";
import { createContainer } from "react-tracked";
import reducer from "./actions";

const initialState = {
  people: null
};


const useValue = () => useReducer(reducer, initialState);


export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useValue);