import * as types from '../actionTypes';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    case types.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }
    case types.SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case types.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case types.SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case types.SET_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage === 1 ? state.currentPage = 1 : state.currentPage - 1
      }
    case types.TOOGLE_FETCHING:
      return {
        ...state,
        isFetching: state.isFetching = action.isFetching
      }
    case types.TOOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching ?
          [...state.isFollowingProgress, action.userId] :
          state.isFollowingProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export default usersReducer;