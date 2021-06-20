import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = ({posts}) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={posts}/>
    </div>
  );
}

export default Profile;