import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = ({ state }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={state.posts}/>
    </div>
  );
}

export default Profile;