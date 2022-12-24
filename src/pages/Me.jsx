import React, { useEffect } from 'react';
import {
  getUsers,
  selectGetUsers,
  selectGetUsersInfo,
} from '../features/users-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlZlc2Vsb0BnbWFpbC5jb20iLCJuYW1lIjoiVmVzZWxvIiwiYWdlIjoyMiwiaWQiOiI2M2E1MzAxYjQ2YTdmMmQ4MmQ4OWNjMTciLCJpYXQiOjE2NzE4NjQ0NjMsImV4cCI6MTY3MTg2ODA2M30.Qoqv__MDVbfeLGqGf3JPDtXQLQyP_3Zq_JWrI0Byucg';
export const Me = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectGetUsers);
  const { error, qty, status } = useSelector(selectGetUsersInfo);

  useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch]);
  return (
    <div className='users'>
      {error && <h2 className='error'>{error}</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <>
          <div className='me'>
            Желаете перейти к просмотру{' '}
            <Link to='/users/me'>всех пользователей</Link>?
          </div>
        </>
      )}
    </div>
  );
};
