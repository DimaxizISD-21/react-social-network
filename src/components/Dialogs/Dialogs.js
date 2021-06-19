import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css'

const DialogItem = ({name, id}) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
};

const MessageItem = ({ msg }) => {
  return (
    <div className={s.message}>{msg}</div>
  );
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      {/*<b>Dialogs</b>*/}
      <div className={s.dialogsItems}>
        <DialogItem name='Katya' id='1'/>
        <DialogItem name='Alex' id='2'/>
        <DialogItem name='Nastya' id='3'/>
      </div>
      <div className={s.messagesItems}>
        <MessageItem msg='Hi'/>
        <MessageItem msg='How are you?'/>
        <MessageItem msg='How is your day?'/>
      </div>
    </div>
  );
}

export default Dialogs;