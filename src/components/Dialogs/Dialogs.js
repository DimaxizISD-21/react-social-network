import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";
import {connect} from "react-redux";

import s from './Dialogs.module.css'

const Dialogs = ({ dialogs, messages }) => {
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
        <MessageInput />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
};

export default connect(mapStateToProps)(Dialogs);