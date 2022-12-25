import React, { useEffect } from 'react';
import { getMe, selectGetMe } from '../features/me-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

export const Me = () => {
  const dispatch = useDispatch();
  const { error, list, status } = useSelector(selectGetMe);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <div className='users'>
      {error && (
        <>
          <h2>{error}</h2>
          <div>
            Уже есть аккаунт?{' '}
            <Link className='link' to='/signin'>
              Войти
            </Link>
          </div>
          <Link className='link' to='/signup'>
            Пройти регистрацию
          </Link>
        </>
      )}
      {status === 'loading' && <Spinner />}
      {status === 'received' && (
        <>
          <h2>Добро Пожаловать, {list.name}</h2>
          <div className='me'>
            Желаете перейти к просмотру{' '}
            <Link className='link' to='/users'>
              всех пользователей
            </Link>
            ?
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
