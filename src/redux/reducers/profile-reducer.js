import * as types from '../actionTypes';

const initialState = {
  posts: [
    {id: 1, msg: 'Hi, how are you?', likesCount: 12},
    {id: 2, msg: 'It`s my first post', likesCount: 9}
  ],
  newPostText: 'Something',
  userProfile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      const newPost = {
        id: 3,
        msg: state.newPostText,
        likesCount: 0
      };

      return {
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case types.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case types.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }
    default:
      return state;
  }
};

export default profileReducer;