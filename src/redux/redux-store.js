import {combineReducers, createStore} from "redux";
import {dialogsReducer, profileReducer, sidebarReducer} from "../reducers";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarFriends: sidebarReducer
});

const store = createStore(reducers);

export default store;