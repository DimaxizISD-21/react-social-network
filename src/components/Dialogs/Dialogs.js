import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

import s from './Dialogs.module.css'

const Dialogs = () => {

  const DialogsData = [
    {id: 1, name: 'Katya'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Nastya'}
  ];

  const MessagesData = [
    {id: 1, msg: 'Hi'},
    {id: 2, msg: 'How are you?'},
    {id: 3, msg: 'How is your day?'}
  ];

  return (
    <div className={s.dialogs}>
      {/*<b>Dialogs</b>*/}
      <div className={s.dialogsItems}>
        {
          DialogsData.map(data => (
            <DialogItem name={data.name} id={data.id}/>
          ))
        }
      </div>
      <div className={s.messagesItems}>
        {
          MessagesData.map(data => (
            <MessageItem msg={data.msg}/>
          ))
        }
      </div>
    </div>
  );
}

export default Dialogs;