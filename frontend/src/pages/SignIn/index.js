import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email }) {
    dispatch(signInRequest(name, email));
  }

  return (
    <>
      <img src={logo} alt="Qualyteam" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your best email" />

        <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
        <a href="https://qualyteam.com/pb/precos/" target="blank">
          Take a look at our prices
        </a>
      </Form>
    </>
  );
}
