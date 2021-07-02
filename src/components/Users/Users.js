import { follow, unfollow, setUsers } from '../../actions';
import { connect } from "react-redux";
import UserItem from "./UserItem/UserItem";

import s from './Users.module.css';

const Users = ({ users, follow, unfollow, setUsers }) => {

  if (users.length === 0) {
    setUsers(
      [
        {
          id: 1,
          fullName: 'James T.',
          avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
          location: {
            city: 'Brooklyn',
            country: 'United States'
          },
          mood: 'I am looking for a Job right now...',
          followed: true
        },
        {
          id: 2,
          fullName: 'Andrey S.',
          avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
          location: {
            city: 'Kiev',
            country: 'Ukraine'
          },
          mood: 'Today it a good day!',
          followed: false
        },
        {
          id: 3,
          fullName: 'Max D.',
          avatarURL: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
          location: {
            city: 'Kharkiv',
            country: 'Ukraine'
          },
          mood: 'I am looking for a new friends!',
          followed: false
        }
      ]
    );
  }

  return (
    <div className={s.users}>
      <span className={s.title}>Users</span>
      {
        users.map(user => (
          <UserItem
            key={user.id}
            userID={user.id}
            fullname={user.fullName}
            avatar={user.avatarURL}
            city={user.location.city}
            country={user.location.country}
            mood={user.mood}
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