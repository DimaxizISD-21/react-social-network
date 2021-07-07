// Profile
const addPost = () => ({type: 'ADD-POST'});
const updateNewPostText = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});

// Messages(Dialogs)
const sendMessage = () => ({type: 'SEND_MESSAGE'});
const updateNewMessageBody = (body) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body});

// Users
const follow = (userID) => ({type: 'FOLLOW', userID});
const unfollow = (userID) => ({type: 'UNFOLLOW', userID});
const setUsers = (users) => ({type: 'SET_USERS', users});

// Pagination
const setTotalUsersCount = (totalUsersCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount});
const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
const setNextPage = () => ({type: 'SET_NEXT_PAGE'});
const setPrevPage = () => ({type: 'SET_PREV_PAGE'});
const toogleFetching = (isFetching) => ({type: 'TOOGLE_FETCHING', isFetching});

export {
  addPost,
  updateNewPostText,
  sendMessage,
  updateNewMessageBody,
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setNextPage,
  setPrevPage,
  toogleFetching
}