// Profile
const addPost = () => ({ type: 'ADD-POST' });
const updateNewPostText = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text });

// Messages(Dialogs)
const sendMessage = () => ({ type: 'SEND_MESSAGE' });
const updateNewMessageBody = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body });

// Users
const follow = (userID) => ({ type: 'FOLLOW', userID });
const unfollow = (userID) => ({ type: 'UNFOLLOW', userID });
const setUsers = (users) => ({ type: 'SET_USERS', users });

export {
  addPost,
  updateNewPostText,
  sendMessage,
  updateNewMessageBody,
  follow,
  unfollow,
  setUsers
}