import s from './UserItem.module.css'

const UserItem = ({ userID, name, avatar, city, country, status, followed, follow, unfollow }) => {
  return (
    <div className={s.userItem}>
      <div className={s.user}>
        <img className={s.userAvatar} src={avatar != null ? avatar : 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'} alt="user"/>
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
          <div className={s.userFullname}>{name}</div>
          <div className={s.userLocation}>{'country, city'}</div>
        </div>
        <div className={s.userMood}>{status}</div>
      </div>
    </div>
  );
};

export default UserItem;