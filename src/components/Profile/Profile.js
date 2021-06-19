import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  const postsData = [
    {id: 1, msg: 'Hi, how are you?', likesCount: 12},
    {id: 2, msg: 'It`s my first post', likesCount: 9}
  ];

  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={postsData}/>
    </div>
  );
}

export default Profile;