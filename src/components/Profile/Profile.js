import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = ({ state, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData={state.posts} addPost={addPost} newPostText={state.newPostText} updateNewPostText={updateNewPostText}/>
    </div>
  );
}

export default Profile;