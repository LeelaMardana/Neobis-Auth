import React, { useEffect } from 'react';
import { getMe, selectGetMe } from '../features/me-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const token = JSON.parse(localStorage.getItem('token'));

export const Me = () => {
  const dispatch = useDispatch();
  const { error, list, status } = useSelector(selectGetMe);

  useEffect(() => {
    dispatch(getMe(token));
  }, [dispatch]);
  return (
    <div className='users'>
      {error && <h2 className='error'>{error}</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <>
          <h2>Добро Пожаловать, {list.name}</h2>
          <div className='me'>
            Желаете перейти к просмотру{' '}
            <Link to='/users'>всех пользователей</Link>?
          </div>
          <div className='box'>
            <div>Вашe имя - {list.name}</div>
            <div>Ваш ID - {list._id}</div>
            <div>Ваш Email - {list.email}</div>
            <div>Ваш возраст - {list.age}</div>
          </div>
        </>
      )}
    </div>
  );
};
