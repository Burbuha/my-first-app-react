const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I`m fine. Thanks" },
    { id: 4, message: "Hi! Check it out!" },
    { id: 5, message: "It`s beautiful!" },
    { id: 6, message: "You are pretty!" },
  ],
  dialogs: [
    { id: 1, name: "Anna", avatar: <i className="fas fa-user-circle"></i> },
    { id: 2, name: "Lena", avatar: <i className="fas fa-user-circle"></i> },
    {
      id: 3,
      name: "Serge",
      avatar: <i className="fas fa-user-circle"></i>,
    },
    {
      id: 4,
      name: "Makar",
      avatar: <i className="fas fa-user-circle"></i>,
    },
    {
      id: 5,
      name: "Anton",
      avatar: <i className="fas fa-user-circle"></i>,
    },
  ],
  newMessageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: state.newMessageText,
          },
        ],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.text };

    default:
      return state;
  }
};

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export default dialogReducer;
