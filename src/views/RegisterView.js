import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register(user));

    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          name
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">register</button>
      </form>
    </div>
  );
}
