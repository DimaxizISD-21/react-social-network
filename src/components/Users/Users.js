import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setNextPage,
  setPrevPage,
  toogleFetching
} from '../../actions';
import {connect} from "react-redux";
import axios from "axios";
import {useEffect} from "react";
import UsersView from "./UsersView";
import Preloader from "../Preloader/Preloader";


const Users = (props) => {
  const {setUsers, pageSize, currentPage, setTotalUsersCount, isFetching, toogleFetching} = props;

  useEffect(() => {
    toogleFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        toogleFetching(false)
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
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
    isFetching: state.usersPage.isFetching
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
  toogleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);