import {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, setNextPage, setPrevPage} from '../../actions';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import {useEffect} from "react";

import s from './Users.module.css';

const Users = (props) => {
  const {
    users,
    follow,
    unfollow,
    setUsers,
    totalUsersCount,
    pageSize,
    currentPage,
    setCurrentPage,
    setNextPage,
    setPrevPage,
    setTotalUsersCount
  } = props;

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      })
  }, [setUsers, setTotalUsersCount, currentPage, pageSize]);

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 5; i <= currentPage + 5; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
      }
    }
  } else {
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i)
    }
  }

  return (
    <div className={s.users}>
      <span className={s.title}>Users</span>
      {
        users.map(user => (
          <UserItem
            key={user.id}
            userID={user.id}
            name={user.name}
            avatar={user.photos.small}
            // city={user.location.city}
            // country={user.location.country}
            status={user.status}
            followed={user.followed}
            follow={follow}
            unfollow={unfollow}
          />
        ))
      }
      <div className={s.btnWrapper}>
        <button className={s.btnShowMore}>Show more</button>
      </div>
      <div className={s.pagination}>
        <button className={s.paginationBtn} onClick={() => setPrevPage()}>{'<<'}</button>
        {
          pages.map((page, i) => (
            <span
              key={i}
              className={currentPage === page ? s.active : ''}
              onClick={() => setCurrentPage(page)}
            >{page}</span>
          ))
        }
        <button className={s.paginationBtn} onClick={() => setNextPage()}>{'>>'}</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setNextPage,
  setPrevPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);