import { Action, Reducer } from "@reduxjs/toolkit";

export const actions = {
  FETCH_BY_USERNAME: 'FETCH_BY_USERNAME',
  IS_LOADING_TRUE: 'IS_LOADING_TRUE',
  IS_LOADING_FALSE: 'IS_LOADING_FALSE',
};

export interface FetchUserName extends Action {
  type: typeof actions.FETCH_BY_USERNAME,
}

export interface SetIsLoadingTrue extends Action {
  type: typeof actions.IS_LOADING_TRUE,
  payload: boolean
}

export interface SetIsLoadingFalse extends Action {
  type: typeof actions.IS_LOADING_FALSE,
  payload: boolean
}

export type UserActionsType = FetchUserName | SetIsLoadingTrue | SetIsLoadingFalse


export interface UsersState {
  name: string | null;
  level: number | null;
  isLoading: boolean;
}

export const fetchUsers = (): FetchUserName => ({
  type: actions.FETCH_BY_USERNAME
});

export const setIsLoadindTrue = (): SetIsLoadingTrue => ({
  type: actions.IS_LOADING_FALSE,
  payload: true
});

export const setIsLoadindFalse = (): SetIsLoadingFalse => ({
  type: actions.IS_LOADING_FALSE,
  payload: false
});



const initialState: UsersState = {
  name: null,
  level: null,
  isLoading: false
}

export const usersReducer: Reducer<UsersState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_BY_USERNAME: {
      return state;
    }
    default:
      return state;
  }
}
