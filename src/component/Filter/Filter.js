import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilterValue);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <p>Find contacts by name</p>
      <label>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
}
