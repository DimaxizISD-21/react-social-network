import s from './Sidebar.module.css'
import Friends from "./Friends/Friends";

const Sidebar = ({state}) => {
  return (
    <div className={s.sidebar}>
      <Friends friends={state} />
    </div>
  );
};

export default Sidebar;