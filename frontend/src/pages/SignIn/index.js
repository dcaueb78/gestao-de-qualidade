import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Qualyteam" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Full name" required />
        <Input
          name="email"
          type="email"
          placeholder="Your best email"
          required
        />

        <button type="submit">Login</button>
        <a href="https://qualyteam.com/pb/precos/" target="blank">
          Take a look at our prices
        </a>
      </Form>
    </>
  );
}
