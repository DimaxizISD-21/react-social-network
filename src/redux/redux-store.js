import {combineReducers, createStore} from "redux";
import {dialogsReducer, profileReducer, sidebarReducer, usersReducer, authReducer} from "./reducers";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const store = createStore(reducers);

export default store;