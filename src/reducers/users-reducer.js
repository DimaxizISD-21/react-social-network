const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        // users: state.users.map(user => {
        //   if (user.id === action.userID) {
        //     return {...user, followed: true}
        //   }
        //   return user
        // })
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    case 'UNFOLLOW':
      return {
        ...state,
        // users: state.users.map(user => {
        //   if (user.id === action.userID) {
        //     return {...user, followed: false}
        //   }
        //   return user
        // })
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }

    case 'SET_USERS':
      return {
        ...state,
        users: [...action.users]
      }
    default:
      return state;
  }
};

export default usersReducer;