import React from 'react';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Qualyteam" />
      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Your best email" />

        <button type="submit">Login</button>
        <a href="https://qualyteam.com/pb/precos/" target="blank">
          Take a look at our prices
        </a>
      </form>
    </>
  );
}
