import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {dialogsReducer, profileReducer, sidebarReducer, usersReducer, authReducer} from "./reducers";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;