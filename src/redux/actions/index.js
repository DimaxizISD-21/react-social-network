import * as types from '../actionTypes';
import SocialAPI from "../../api";

// Profile actions
export const addPost = () => ({type: types.ADD_POST});
export const updateNewPostText = (text) => ({type: types.UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (userProfile) => ({type: types.SET_USER_PROFILE, userProfile});

// Messages(Dialogs) actions
export const sendMessage = () => ({type: types.SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({type: types.UPDATE_NEW_MESSAGE_BODY, body});

// Users actions
export const follow = (userID) => ({type: types.FOLLOW, userID});
export const unfollow = (userID) => ({type: types.UNFOLLOW, userID});
export const setUsers = (users) => ({type: types.SET_USERS, users});
export const toogleIsFollowingProgress = (isFetching, userId) => ({
  type: types.TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

// Pagination actions
export const setTotalUsersCount = (totalUsersCount) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: types.SET_CURRENT_PAGE, currentPage});
export const setNextPage = () => ({type: types.SET_NEXT_PAGE});
export const setPrevPage = () => ({type: types.SET_PREV_PAGE});
export const toogleFetching = (isFetching) => ({type: types.TOOGLE_FETCHING, isFetching});

// Auth actions
export const setAuthUserData = (userId, email, login) => ({type: types.SET_USER_DATA, data: {userId, email, login}});

// Thunk Profile actions
export const setUserProfileThunkCreator = (userID) =>
  (dispatch) => {
    if (!userID) {
      userID = 2;
      // userID = 18187;
    }
    new SocialAPI().getUserProfile(userID).then(data => {
      dispatch(setUserProfile(data));
    })
  };

// Thunk Users actions
export const getUsersThunkCreator = (currentPage, pageSize) =>
  (dispatch) => {
    dispatch(toogleFetching(true));
    new SocialAPI().getUsers(currentPage, pageSize).then(data => {
      dispatch(toogleFetching(false))
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  };

export const followUserThunkCreator = (userID) =>
  (dispatch) => {
    dispatch(toogleIsFollowingProgress(true, userID));
    new SocialAPI().followUser(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userID));
      }
      dispatch(toogleIsFollowingProgress(false, userID));
    })
  };

export const unfollowUserThunkCreator = (userID) =>
  (dispatch) => {
    dispatch(toogleIsFollowingProgress(true, userID));
    new SocialAPI().unfollowUser(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userID));
      }
      dispatch(toogleIsFollowingProgress(false, userID));
    })
  };

// Thunk Auth actions
export const getAuthMeThunkCreator = () =>
  (dispatch) => {
    new SocialAPI().getAuthMe().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    })
  };