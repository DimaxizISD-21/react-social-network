import * as types from '../actionTypes';

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Katya',
      avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5.jpg'
    },
    {
      id: 2,
      name: 'Alex',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA393EVfvQ4aAMdzb2zC8JN7JfSxdOrm-jj6aqUhuHEJyqi1b7vH-X6kExlgbHdqNv7E&usqp=CAU'
    },
    {
      id: 3,
      name: 'Nastya',
      avatar: 'https://peopletalk.ru/userfiles/images/%D0%B2%20%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D1%87%D0%BA%D0%B5%284%29%281%29.jpg'
    }
  ],
  messages: [
    {id: 1, msg: 'Hi'},
    {id: 2, msg: 'How are you?'},
    {id: 3, msg: 'I`m fine thanks!'},
    {id: 4, msg: 'How is your day?'},
  ],
  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      const message = {
        id: 5,
        msg: state.newMessageBody
      };

      return {
        ...state,
        messages: [...state.messages, message],
        newMessageBody: ''
      }
    case types.UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    default:
      return state;
  }
};

export default dialogsReducer;