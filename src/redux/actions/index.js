import * as types from '../actionTypes';

// Profile
export const addPost = () => ({type: types.ADD_POST});
export const updateNewPostText = (text) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (userProfile) => ({type: types.SET_USER_PROFILE, userProfile});

// Messages(Dialogs)
export const sendMessage = () => ({type: types.SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({type: types.UPDATE_NEW_MESSAGE_BODY, body});

// Users
export const follow = (userID) => ({type: types.FOLLOW, userID});
export const unfollow = (userID) => ({type: types.UNFOLLOW, userID});
export const setUsers = (users) => ({type: types.SET_USERS, users});

// Pagination
export const setTotalUsersCount = (totalUsersCount) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: types.SET_CURRENT_PAGE, currentPage});
export const setNextPage = () => ({type: types.SET_NEXT_PAGE});
export const setPrevPage = () => ({type: types.SET_PREV_PAGE});
export const toogleFetching = (isFetching) => ({type: types.TOOGLE_FETCHING, isFetching});

// Auth
export const setAuthUserData = (userId, email, login) => ({type: types.SET_USER_DATA, data: {userId, email, login}});