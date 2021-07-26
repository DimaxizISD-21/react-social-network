import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";

import s from "./Dialogs.module.css";

const DialogsView = ({ dialogs, messages, bodyText, sendMessage, updateNewMessageBody }) => {
  return (
    <div className={s.dialogs}>
      {/*<b>Dialogs</b>*/}
      <div className={s.dialogsItems}>
        {
          dialogs.map(data => (
            <DialogItem key={data.id} name={data.name} id={data.id} avatar={data.avatar}/>
          ))
        }
      </div>
      <div className={s.messagesItems}>
        {
          messages.map(data => (
            <MessageItem key={data.id} msg={data.msg}/>
          ))
        }
      </div>
      <MessageInput
        bodyText={bodyText}
        sendMessage={sendMessage}
        updateNewMessageBody={updateNewMessageBody}
      />
    </div>
  );
};

export default DialogsView;