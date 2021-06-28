import React from 'react';
import s from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";
import {connect} from "react-redux";

const Friends = ({friends}) => {
  return (
    <div className={s.friends}>
      <h4>Friends</h4>
      <div className={s.wrapper}>
        {
          friends.map((friend, i) => (
            <FriendItem key={i} avatar={friend.avatar} name={friend.name}/>
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.sidebarFriends
  }
};

export default connect(mapStateToProps)(Friends);