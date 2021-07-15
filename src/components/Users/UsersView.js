import UserItem from "./UserItem/UserItem";
import Pagination from "../common/Pagination/Pagination";

import s from "./Users.module.css";

const UsersView = (props) => {
  const {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    setCurrentPage,
    setNextPage,
    setPrevPage,
    isFollowingProgress,
    followUser,
    unfollowUser
  } = props;

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
            followUser={followUser}
            unfollowUser={unfollowUser}
            isFollowingProgress={isFollowingProgress}
          />
        ))
      }
      <div className={s.btnWrapper}>
        <button className={s.btnShowMore}>Show more</button>
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        setCurrentPage={setCurrentPage}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
      />
    </div>
  );
};

export default UsersView;