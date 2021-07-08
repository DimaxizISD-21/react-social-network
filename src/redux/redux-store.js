import {combineReducers, createStore} from "redux";
import {dialogsReducer, profileReducer, sidebarReducer, usersReducer} from "./reducers";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer,
  usersPage: usersReducer
});

const store = createStore(reducers);

export default store;