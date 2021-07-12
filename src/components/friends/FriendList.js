import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './Friends.module.scss';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

export default FriendList;
