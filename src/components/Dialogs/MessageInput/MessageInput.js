import {createRef, useRef} from "react";

import s from './MessageInput.module.css';

const MessageInput = () => {
  const msgInputElement = useRef();

  const sendMessage = () => {
    const msg = msgInputElement.current.value;
    alert(`Sending: ${msg}`)
  };

  return (
    <div className={s.inputMessage}>
      <textarea ref={msgInputElement} className={s.inputMsg}></textarea>
      <button onClick={sendMessage} className={s.btnSend}>Send</button>
    </div>
  );
};

export default MessageInput;