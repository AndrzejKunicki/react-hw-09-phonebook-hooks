import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Avatar alt="Remy Sharp" src={defaultAvatar} alt="avatar" width="32" />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
