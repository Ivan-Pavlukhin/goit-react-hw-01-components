import React from 'react';
import FriendItem from './FriendItem';
// import friends from '../friends.json';
import '../styles/friends.css';

const FriendsList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <FriendItem friend={friend} />
      </li>
    ))}
  </ul>
);

export default FriendsList;
