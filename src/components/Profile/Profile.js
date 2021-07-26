import {useEffect, useRef} from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {setUserProfileThunkCreator} from "../../redux/actions";
import {withRouter} from 'react-router-dom'
import withAuthRedirect from "../../hoc/withAuthRedirect";


const Profile = ({userProfile, setUserProfile, match}) => {
  let userID = useRef(match.params.userId);

  useEffect(() => {
    setUserProfile(userID.current);
  }, [setUserProfile]);

  return <ProfileView profile={userProfile} />
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
};

export default withAuthRedirect(withRouter(connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator
})(Profile)));