import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
      <div className={s.item}>
      <img src="https://cs11.pikabu.ru/post_img/2020/04/12/9/1586704514168132921.png" />
        <span>{props.message}</span>
      <div className={s.like}>
          <span>Like {props.likeCount}</span>
        </div>

      </div>
  );
}

export default Post;