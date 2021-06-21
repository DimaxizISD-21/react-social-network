import React from 'react';
import s from "../Friends.module.css";

const FriendItem = ({avatar, name}) => {
  return (
    <div className={s.friendItem}>
      <img className={s.friendsAvatar}
           src={avatar}/>
      <div className="friendName">{name}</div>
    </div>
  );
};

export default FriendItem;