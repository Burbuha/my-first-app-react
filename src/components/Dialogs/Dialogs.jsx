import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  debugger
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.name} avatar={dialog.avatar} />);
  let messageElements = state.messages.map(message => <Message message = {message.message} key={message.id}/>)

  let newMessageEl = React.createRef();
  let addMessage = () => {
    props.addMessage();
  }
  let updateMessage = (e) => {
    let text = e.target.value;
    props.updateMessage(text);
  }

  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
      <div className={s.inputMessage}>
        <textarea ref={newMessageEl} placeholder="Enter your message...." value={state.newMessageText} onChange={updateMessage}></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;