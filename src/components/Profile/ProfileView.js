import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";

const ProfileView = ({ profile }) => {
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