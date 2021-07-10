import {useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/actions";
import axios from "axios";
import HeaderView from "./HeaderView";

const Header = ({setAuthUserData, login, isAuth}) => {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data;
          setAuthUserData(id, email, login)
        }
      })
  }, [setAuthUserData])

  return <HeaderView isAuth={isAuth} userLogin={login}/>
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setAuthUserData})(Header);