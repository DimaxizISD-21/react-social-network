import {NavLink} from "react-router-dom";

import s from "../Dialogs.module.css";

const DialogItem = ({name, id, avatar}) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <div className={s.wrapper}>
        <img className={s.dialogAvatar} src={avatar}/>
        <NavLink to={`/messages/${id}`}>{name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;