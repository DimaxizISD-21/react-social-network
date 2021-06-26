const addPost = () => ({ type: 'ADD-POST' });
const updateNewPostText = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text });

export {
  addPost,
  updateNewPostText
}