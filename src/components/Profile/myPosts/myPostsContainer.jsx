import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, addPostChangeActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./myPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => { dispatch(addPostChangeActionCreator(text)) },
    addPost: () => { dispatch(addPostActionCreator()) },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
