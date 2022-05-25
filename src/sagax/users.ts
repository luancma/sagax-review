import { Action } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { actions, setIsLoadindTrue } from '../store/user';


const fetchUserAPI = (): Promise<ReturnFetchType> => {
 return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'string',
        level: 2
      });
    }, 4000);
  })
}

interface ReturnFetchType {
  name: string;
  level: number;
}

interface FetchUserType extends Action  {
  type: typeof actions.FETCH_BY_USERNAME;
  payload: ReturnFetchType
}


function* fetchUser(): any {
  yield put(setIsLoadindTrue());
   try {
      const user = yield call(fetchUserAPI);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      console.error(e)
   }
}

function* usersSaga(): Generator {
  yield takeEvery(actions.FETCH_USERS, fetchUsers);
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export { };
