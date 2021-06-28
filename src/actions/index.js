const addPost = () => ({ type: 'ADD-POST' });
const updateNewPostText = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text });
const sendMessage = () => ({ type: 'SEND_MESSAGE' });
const updateNewMessageBody = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body });

export {
  addPost,
  updateNewPostText,
  sendMessage,
  updateNewMessageBody
}