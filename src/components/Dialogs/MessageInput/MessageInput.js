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

export default MessageInput;