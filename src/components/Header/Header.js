import {useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/actions";
import {getAuthMe} from "../../api";
import HeaderView from "./HeaderView";

const Header = ({setAuthUserData, login, isAuth}) => {
  useEffect(() => {
    getAuthMe().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
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