import React from 'react';

const FriendItem = ({ friend }) => (
  // <li className="item" key={friend.id}>
  <>
    <span className="status" data-set={friend.isOnline}></span>
    <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
    <p className="name">{friend.name}</p>
  </>
  /* </li> */
);

export default FriendItem;
