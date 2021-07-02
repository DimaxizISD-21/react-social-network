import s from './UserItem.module.css'

const UserItem = ({ userID, fullname, avatar, city, country, mood, followed, follow, unfollow }) => {
  return (
    <div className={s.userItem}>
      <div className={s.user}>
        <img className={s.userAvatar} src={avatar} alt="user"/>
        {
          followed ?
            <button
              className={s.followed}
              onClick={() => unfollow(userID)}
            >Unfollow</button>
            :
            <button
              className={s.followed}
              onClick={() => follow(userID)}
            >Follow</button>
        }
      </div>
      <div className={s.userDescription}>
        <div className={s.userInfo}>
          <div className={s.userFullname}>{fullname}</div>
          <div className={s.userLocation}>{country}, {city}</div>
        </div>
        <div className={s.userMood}>{mood}</div>
      </div>
    </div>
  );
};

export default UserItem;