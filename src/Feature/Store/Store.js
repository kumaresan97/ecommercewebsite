import { createStore } from "redux";
import { initialState, statereducer } from '../Reducer/Reducers'
export const Store = createStore(statereducer, initialState);