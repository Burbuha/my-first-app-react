import React from 'react';
import s from './../Navbar.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
  let friend = props.state.map(friend => <FriendItem name={friend.name} id={friend.id} key={friend.id} avatar={friend.avatar} />)
  return(
      <div>
        <h2>Friends</h2>
        <div className={s.friends}>
          {friend}
        </div>

      </div>
  );
}

export default Friends;