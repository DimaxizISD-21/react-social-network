import {createRef, useRef} from "react";
import {sendMessage, updateNewMessageBody} from "../../../actions";

import s from './MessageInput.module.css';

const MessageInput = ({ dispatch, bodyText }) => {
  // const msgInputElement = useRef();

  const onSendMessage = () => {
    dispatch(sendMessage());
    // alert(`Sending: ${msg}`)
  };

  const onBodyChange = (e) => {
    const body = e.target.value; //msgInputElement.current.value;
    dispatch(updateNewMessageBody(body));
  };

  return (
    <div className={s.inputMessage}>
      <textarea
        // ref={msgInputElement}
        className={s.inputMsg}
        placeholder='Enter your message'
        value={bodyText}
        onChange={onBodyChange}
      />
      <button onClick={onSendMessage} className={s.btnSend}>Send</button>
    </div>
  );
};

export default MessageInput;