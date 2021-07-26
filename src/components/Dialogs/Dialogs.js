import {connect} from "react-redux";
import DialogsView from "./DialogsView";
import {sendMessage, updateNewMessageBody} from "../../redux/actions";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const Dialogs = (props) => {
  return <DialogsView {...props}/>
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    bodyText: state.dialogsPage.newMessageBody,
  }
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    sendMessage,
    updateNewMessageBody
  })
)(Dialogs);