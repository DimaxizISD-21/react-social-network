import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = ({ state, dispatch }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={state.posts} dispatch={dispatch} newPostText={state.newPostText}/>
    </div>
  );
}

export default Profile;