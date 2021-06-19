import s from "../Dialogs.module.css";

const MessageItem = ({msg}) => {
  return (
    <div className={s.message}>{msg}</div>
  );
};

export default MessageItem;