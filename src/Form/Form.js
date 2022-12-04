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
        email: '',
        amount: 0,
        currency: '',
        text: '',
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Имя должно содержать более чем 2 символа.')
          .required('Введите имя.'),
        email: Yup.string()
          .email('Неправильный email адрес.')
          .required('Введите email.'),
        amount: Yup.number()
          .min(5, 'Минимальная сумма 5.')
          .required('Введите сумму.'),
        currency: Yup.string().required('Выберите валюту.'),
        text: Yup.string().min(
          11,
          'Сообщение должно содержать более чем 10 символов.'
        ),
        terms: Yup.boolean()
          .required('Необходимо согласие!')
          .oneOf([true], 'Необходимо согласие!'),
      })}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={s.form}>
        <h2>Отправить заявку</h2>
        <MyTextInput label='Ваше имя' id='name' name='name' type='text' />

        <MyTextInput label='Ваша почта' id='email' name='email' type='email' />

        <label htmlFor='amount'>Сумма</label>
        <Field id='amount' name='amount' type='number' />
        <ErrorMessage className={s.error} name='amount' component='div' />

        <label htmlFor='currency'>Валюта</label>
        <Field id='currency' name='currency' as='select'>
          <option value=''>Выберите валюту</option>
          <option value='USD'>USD</option>
          <option value='UAH'>UAH</option>
          <option value='RUB'>RUB</option>
        </Field>
        <ErrorMessage className={s.error} name='currency' component='div' />

        <label htmlFor='text'>Ваше сообщение</label>
        <Field id='text' name='text' as='textarea' />
        <ErrorMessage className={s.error} name='text' component='div' />

        <MyCheckbox name='terms'>
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckbox>
        <button type='submit'>Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
