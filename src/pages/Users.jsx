import React, { useEffect } from 'react';
import { getUsers, selectGetUsers } from '../features/users-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Users = () => {
  const dispatch = useDispatch();
  const { error, list, status } = useSelector(selectGetUsers);
  useEffect(() => {
    dispatch(getUsers());
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
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <>
          <h2>Все пользователи</h2>
          <div className='me'>
            Желаете перейти на <Link to='/users/me'>мой профиль</Link>?
          </div>
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user, id) => (
                <tr key={user._id}>
                  <td>{id + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
  // return (
  //   <>
  //     {user ? (
  //       <section className={s.heading}>
  //         <h2>Welcome {user && user.name}</h2>
  //         <p>Your email is {user.email}</p>
  //         <p>Your age is {user.age}?</p>
  //       </section>
  //     ) : (
  //       <div>You have to Login first</div>
  //     )}
  //   </>
  // );
};
