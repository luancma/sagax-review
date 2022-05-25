import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { usersReducer, UsersState } from "./user";

export interface State {
  usersState: UsersState;
}

const rootReducer = (): Reducer =>
  combineReducers({
    usersState: usersReducer
  })


export { rootReducer }
