import React from 'react';
import s from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElemets = props.posts.map(post => <Post message={post.post} key={post.id} likeCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let onPostAdd = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return(
    <div className={s.containerPosts}>
      <h3>My posts</h3>
      <div className={s.inputPost}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} placeholder="What’s on your mind?"/>
        <button onClick={onPostAdd}>Add post</button>
      </div>
    <div className={s.posts}>
      {postElemets}
    </div>
    </div>
  );
}

export default MyPosts;