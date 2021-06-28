const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const message = {
        id: 5,
        msg: state.newMessageBody
      };

      state.messages.push(message);
      state.newMessageBody = '';
      return state;
    case 'UPDATE_NEW_MESSAGE_BODY':
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;