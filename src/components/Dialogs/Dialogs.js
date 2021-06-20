import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

import s from './Dialogs.module.css'

const Dialogs = ({dialogs, messages}) => {
  return (
    <div className={s.dialogs}>
      {/*<b>Dialogs</b>*/}
      <div className={s.dialogsItems}>
        {
          dialogs.map(data => (
            <DialogItem name={data.name} id={data.id}/>
          ))
        }
      </div>
      <div className={s.messagesItems}>
        {
          messages.map(data => (
            <MessageItem msg={data.msg}/>
          ))
        }
      </div>
    </div>
  );
}

export default Dialogs;