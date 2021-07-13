import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../../api";

import avatarSvg from './avatar.svg';
// 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
import s from './UserItem.module.css';

const UserItem = ({userID, name, avatar, city, country, status, followed, follow, unfollow}) => {

  const handleFollow = () => {
    followUser(userID).then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        follow(userID)
      }
    })
  };

  const handleUnFollow = () => {
    unfollowUser(userID).then(response => {
      if (response.data.resultCode === 0) {
        unfollow(userID)
      }
    })
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
              className={s.followed}
              onClick={handleUnFollow}
            >Unfollow</button>
            :
            <button
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