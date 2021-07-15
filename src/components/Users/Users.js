import {
  setCurrentPage,
  setNextPage,
  setPrevPage,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
} from '../../redux/actions';
import {connect} from "react-redux";
import {useEffect} from "react";
import UsersView from "./UsersView";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
  const {pageSize, currentPage, isFetching, getUsers} = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [getUsers, currentPage, pageSize])

  return isFetching ? <Preloader/> : <UsersView {...props}/>
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  }
};

const mapDispatchToProps = {
  setCurrentPage,
  setNextPage,
  setPrevPage,
  getUsers: getUsersThunkCreator,
  followUser: followUserThunkCreator,
  unfollowUser: unfollowUserThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);