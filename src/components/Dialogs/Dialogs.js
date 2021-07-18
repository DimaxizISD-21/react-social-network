import {connect} from "react-redux";
import DialogsView from "./DialogsView";
import {sendMessage, updateNewMessageBody} from "../../redux/actions";

const Dialogs = (props) => {
  return <DialogsView {...props}/>
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    bodyText: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody
})(Dialogs);