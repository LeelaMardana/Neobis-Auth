import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
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

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label className={s.checkbox}>
        <input type='checkbox' {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        age: 0,
        email: '',
        password: '',
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Имя должно содержать более чем 2 символа.')
          .required('Введите имя.'),
        email: Yup.string()
          .email('Неправильный email адрес.')
          .required('Введите email.'),
        age: Yup.number()
          .min(5, 'Минимальный возраст должен быть 18.')
          .required('Введите возраст.'),
        password: Yup.string()
          .min(8, 'Пароль должен содержать минимум 8 символов.')
          .required('Введите пароль.'),
        terms: Yup.boolean()
          .required('Необходимо согласие!')
          .oneOf([true], 'Необходимо согласие!'),
      })}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={s.form}>
        <MyTextInput label='Username' id='name' name='name' type='text' />

        <label htmlFor='age'>Age</label>
        <Field id='age' name='age' type='number' />
        <ErrorMessage className={s.error} name='age' component='div' />

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

        <MyCheckbox name='terms'>Agree with Terms & Conditions</MyCheckbox>
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
