import s from './Sidebar.module.css'
import Friends from "./Friends/Friends";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Friends />
    </div>
  );
};

export default Sidebar;