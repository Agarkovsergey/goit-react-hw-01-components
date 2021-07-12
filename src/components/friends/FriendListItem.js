import React from 'react';
import styles from './Friends.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.FriendItem}>
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
