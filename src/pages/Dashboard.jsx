import React, { useEffect } from 'react';
import { getUsers, selectUsers } from '../features/users-slice';
import { useDispatch, useSelector } from 'react-redux';

// //all users
// axios
//   .get('https://users-auth-api.onrender.com/api/users', {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err.response.data.message));

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlZlc2Vsb0BnbWFpbC5jb20iLCJuYW1lIjoiVmVzZWxvIiwiYWdlIjoyMiwiaWQiOiI2M2E1MzAxYjQ2YTdmMmQ4MmQ4OWNjMTciLCJpYXQiOjE2NzE4MjQxMDQsImV4cCI6MTY3MTgyNzcwNH0.cvAbkj6tLkeLZs-sNAWYPYjSn5dBmtlptP6-xD06UzQ';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers) || [];
  useEffect(() => {
    dispatch(getUsers(token));
  }, [dispatch]);

  return (
    <>
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
