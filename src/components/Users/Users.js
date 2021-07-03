import {follow, unfollow, setUsers} from '../../actions';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import {useEffect} from "react";

import s from './Users.module.css';

const Users = ({users, follow, unfollow, setUsers}) => {

  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => setUsers(response.data.items))
  }, [setUsers]);

  // if (users.length === 0) {
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //     .then(response => setUsers(response.data.items))
  //   // setUsers(
  //   //   [
  //   //     {
  //   //       id: 1,
  //   //       fullName: 'James T.',
  //   //       avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
  //   //       location: {
  //   //         city: 'Brooklyn',
  //   //         country: 'United States'
  //   //       },
  //   //       mood: 'I am looking for a Job right now...',
  //   //       followed: true
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       fullName: 'Andrey S.',
  //   //       avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
  //   //       location: {
  //   //         city: 'Kiev',
  //   //         country: 'Ukraine'
  //   //       },
  //   //       mood: 'Today it a good day!',
  //   //       followed: false
  //   //     },
  //   //     {
  //   //       id: 3,
  //   //       fullName: 'Max D.',
  //   //       avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
  //   //       location: {
  //   //         city: 'Kharkiv',
  //   //         country: 'Ukraine'
  //   //       },
  //   //       mood: 'I am looking for a new friends!',
  //   //       followed: false
  //   //     }
  //   //   ]
  //   // );
  // }

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);