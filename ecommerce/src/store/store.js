import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import sagas from "./sagas";
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from "./persistConfig";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);