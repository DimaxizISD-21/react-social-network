import { Link } from "react-router-dom";
import logo from './sprout-social.svg';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
          <Link to='/'><img src={logo} alt='logo'/></Link>
        </header>
    );
}

export default Header;