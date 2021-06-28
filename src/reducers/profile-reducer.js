const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: 3,
        msg: state.newPostText,
        likesCount: 0
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE_NEW_POST_TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export default profileReducer;