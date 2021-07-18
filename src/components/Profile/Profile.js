import {useEffect, useRef} from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {setUserProfileThunkCreator} from "../../redux/actions";
import {withRouter} from 'react-router-dom'


const Profile = ({userProfile, setUserProfile, match, isAuth}) => {
  let userID = useRef(match.params.userId);

  useEffect(() => {
    setUserProfile(userID.current);
  }, [setUserProfile]);

  return <ProfileView profile={userProfile} isAuth={isAuth}/>
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
  }
};

export default withRouter(connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator
})(Profile));