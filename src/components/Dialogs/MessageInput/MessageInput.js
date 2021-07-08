import {sendMessage, updateNewMessageBody} from "../../../redux/actions";
import {connect} from "react-redux";

import s from './MessageInput.module.css';

const MessageInput = ({ bodyText, sendMessage, updateNewMessageBody }) => {

  const onSendMessage = () => {
    sendMessage();
  };

  const onBodyChange = (e) => {
    const body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={s.inputMessage}>
      <textarea
        className={s.inputMsg}
        placeholder='Enter your message'
        value={bodyText}
        onChange={onBodyChange}
      />
      <button onClick={onSendMessage} className={s.btnSend}>Send</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bodyText: state.dialogsPage.newMessageBody
  }
};

const mapDispatchToProps = {
  sendMessage,
  updateNewMessageBody
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);