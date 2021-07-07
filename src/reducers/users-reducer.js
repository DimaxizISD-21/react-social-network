const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
    case 'SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case 'SET_PREV_PAGE':
      return {
        ...state,
        currentPage: state.currentPage === 1 ? state.currentPage = 1 : state.currentPage - 1
      }
    default:
      return state;
  }
};

export default usersReducer;