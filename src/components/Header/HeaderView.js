import {NavLink} from "react-router-dom";

import logo from "./sprout-social.svg";
import s from "./Header.module.css";

const HeaderView = ({ userLogin, isAuth }) => {
  return (
    <header className={s.header}>
      <NavLink to='/'><img src={logo} alt='logo'/></NavLink>
      <div className={s.login}>
        {
          isAuth ? userLogin : <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default HeaderView;