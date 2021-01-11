import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi, HOW ARE YOU?", likesCount: 12 },
        { id: 2, post: "It`s my first post", likesCount: 11 },
        { id: 3, post: "Happy New Year!", likesCount: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: [
      { id: 1, name: "Anna", avatar: <i className="fas fa-user-circle"></i> },
      { id: 2, name: "Lena", avatar: <i className="fas fa-user-circle"></i> },
      { id: 3, name: "Serge", avatar: <i className="fas fa-user-circle"></i> },
    ],
  },

  _callSubscriber() {
    console.log("STATE CHANGE!");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
