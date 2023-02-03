import React from 'react'
// import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import MyReducer from '../Component/Reducer/MyReducer';
import { createStore,applyMiddleware } from "redux";
const store = createStore(MyReducer,applyMiddleware(logger));
export default store;

// const MyStore=createStore(MyReducer,applyMiddleware(logger));
// export default MyStore;   