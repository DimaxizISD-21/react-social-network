import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setNextPage,
  setPrevPage,
  toogleFetching,
  toogleIsFollowingProgress
} from '../../redux/actions';
import {connect} from "react-redux";
import {useEffect} from "react";
import UsersView from "./UsersView";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api";


const Users = (props) => {
  const {setUsers, pageSize, currentPage, setTotalUsersCount, isFetching, toogleFetching} = props;

  useEffect(() => {
    toogleFetching(true)
    getUsers(currentPage, pageSize).then(data => {
        toogleFetching(false)
        setUsers(data.items);
        setTotalUsersCount(data.totalCount);
      })
  }, [setUsers, setTotalUsersCount, currentPage, pageSize, toogleFetching]);

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
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setNextPage,
  setPrevPage,
  toogleFetching,
  toogleIsFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);