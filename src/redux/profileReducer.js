const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, post: "Hi, HOW ARE YOU?", likesCount: 12 },
    { id: 2, post: "It`s my first post", likesCount: 11 },
    { id: 3, post: "Happy New Year!", likesCount: 5 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            post: state.newPostText,
            likesCount: 0,
          },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.inputValue };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  inputValue: text,
});

export default profileReducer;
