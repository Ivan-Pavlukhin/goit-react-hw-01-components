import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './foto.jpg';
import styles from './friends.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(({ id, name, isOnline, avatar = defaultImg }) => (
      <li className={styles.item} key={id}>
        <span className={styles.status} data-set={isOnline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.defaultProps = {
  avatar: defaultImg,
};

FriendsList.propsTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
