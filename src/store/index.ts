import { AnyAction, applyMiddleware, legacy_createStore, Store } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, State } from './root';
// import { composeWithDevTools } from 'redux-devtools-extension';

export type AppStore = Store<State, AnyAction>;

const store = (initialState?: Partial<State>): Store => {
  // const sagaMiddleware = createSagaMiddleware();
  // const middlewares = [sagaMiddleware];
  const store = legacy_createStore<Partial<State>, AnyAction, unknown, unknown>(
    rootReducer(),
    initialState,
    // composeWithDevTools(applyMiddleware(...middlewares))
  );

  // sagaMiddleware.run(rootSaga);

  return store;
};

export { store };
