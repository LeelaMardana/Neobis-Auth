import s from './Form.module.scss';
import React from 'react';

const user = {
  name: 'Avv',
  email: 123,
  age: 45,
};

export const Dashboard = () => {
  return (
    <>
      {user ? (
        <section className={s.heading}>
          <h2>Welcome {user && user.name}</h2>
          <p>Your email is {user.email}</p>
          <p>Your age is {user.age}?</p>
        </section>
      ) : (
        <div>You have to Login first</div>
      )}
    </>
  );
};
