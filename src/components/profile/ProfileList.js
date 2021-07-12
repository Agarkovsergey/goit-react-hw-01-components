import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

const ProfileList = ({ profile }) => (
  <ul className={styles.profileList}>
    {profile.map(({ id, avatar, name, tag, location, stats }) => (
      <li key={id} className={styles.profileItem}>
        <Profile
          avatar={avatar}
          name={name}
          tag={tag}
          location={location}
          stats={stats}
        />
      </li>
    ))}
  </ul>
);

ProfileList.protoTypes = {
  profile: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileList;
