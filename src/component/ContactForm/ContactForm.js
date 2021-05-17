import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(contactsSelectors.getAllcontacts);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = user;

    const alreadyСontact = contacts.filter(contact =>
      contact.name.includes(name),
    );

    if (alreadyСontact.length) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact(name, number));
    resetForm();
  };

  const resetForm = () => {
    setUser({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name{' '}
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number{' '}
        <input
          type="number"
          value={user.number}
          name="number"
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.addBtn}>
        Add contact
      </button>
    </form>
  );
}
