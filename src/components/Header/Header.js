import {useEffect} from "react";
import {connect} from "react-redux";
import {getAuthMeThunkCreator} from "../../redux/actions";
import HeaderView from "./HeaderView";

const Header = ({getAuthMe, login, isAuth}) => {
  useEffect(() => {
    getAuthMe()
  }, [getAuthMe])

  return <HeaderView isAuth={isAuth} userLogin={login}/>
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthMe: getAuthMeThunkCreator})(Header);