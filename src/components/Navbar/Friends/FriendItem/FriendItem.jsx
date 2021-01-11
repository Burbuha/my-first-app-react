import React from 'react';
import s from './../../Navbar.module.css';

const FriendItem = (props) => {
  return(
      <div className={s.friend}>
        <p>{props.avatar}</p>
        <p>{props.name}</p>
      </div>
  );
}

export default FriendItem;