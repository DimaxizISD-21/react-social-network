import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

const ProfileView = ({profile, isAuth}) => {

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div>
      {
        !profile ? <Preloader/> :
          <ProfileInfo fullName={profile.fullName} photos={profile.photos.small} about={profile.aboutMe}
                       contacts={profile.contacts} lookingForAJob={profile.lookingForAJob}/>
      }
      <MyPosts/>
    </div>
  );
};

export default ProfileView;