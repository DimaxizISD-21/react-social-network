import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {setUserProfile} from "../../redux/actions";
import {withRouter} from 'react-router-dom'


const Profile = ({ userProfile, setUserProfile, match }) => {
  let userID = match.params.userId;

  useEffect(() => {
    if (!userID) {
      userID = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then(response => setUserProfile(response.data))
  }, [setUserProfile]);

  return <ProfileView profile={userProfile} />
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile
  }
};

export default withRouter(connect(mapStateToProps, {setUserProfile})(Profile));