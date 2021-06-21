import React from 'react';
import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";

const Friends = ({friends}) => {
  return (
    <div className={s.friends}>
      <h4>Friends</h4>
      <div className={s.wrapper}>
        {
          friends.map(friend => (
            <FriendItem avatar={friend.avatar} name={friend.name}/>
          ))
        }
      </div>
    </div>
  );
};

export default Friends;