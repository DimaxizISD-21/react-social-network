import {NavLink} from "react-router-dom";

import avatarSvg from './avatar.svg';
// 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
import s from './UserItem.module.css';

const UserItem = (props) => {

  //  city, country,
  const {
    userID,
    name,
    avatar,
    status,
    followed,
    followUser,
    unfollowUser,
    isFollowingProgress,
  } = props;

  const handleFollow = () => {
    followUser(userID);
  };

  const handleUnFollow = () => {
    unfollowUser(userID);
  };

  return (
    <div className={s.userItem}>
      <div className={s.user}>
        <NavLink to={`/profile/${userID}`}>
          <img className={s.userAvatar} src={avatar != null ? avatar : avatarSvg} alt="user"/>
        </NavLink>
        {
          followed ?
            <button
              disabled={isFollowingProgress.some(id => id === userID)}
              className={s.followed}
              onClick={handleUnFollow}
            >Unfollow</button>
            :
            <button
              disabled={isFollowingProgress.some(id => id === userID)}
              className={s.followed}
              onClick={handleFollow}
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