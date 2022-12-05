import { Formik, Form, useField } from 'formik';
import s from './Form.module.scss';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export const Signin = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Неправильный email адрес.')
          .required('Введите email.'),
        password: Yup.string()
          .min(8, 'Пароль должен содержать минимум 8 символов.')
          .required('Введите пароль.'),
      })}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={s.form}>
        <MyTextInput
          label='Email address'
          id='email'
          name='email'
          type='email'
        />
        <MyTextInput
          label='Password'
          id='password'
          name='password'
          type='password'
        />
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
};
