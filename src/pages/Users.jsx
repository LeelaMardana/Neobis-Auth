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

export const Users = () => {
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
              {users.map((user, id) => (
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
