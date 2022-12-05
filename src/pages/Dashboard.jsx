import s from './Form.module.scss';
import React from 'react';

const user = {
  name: 'AwesomeTowa',
  email: 'Deankurumi@gmail.',
  age: 44,
};

export const Dashboard = () => {
  return (
    <>
      <section className={s.heading}>
        <h2>Welcome {user && user.name}</h2>
        <p>Your email is {user.email}</p>
        <p>Your age is {user.age}?</p>
      </section>
    </>
  );
};
