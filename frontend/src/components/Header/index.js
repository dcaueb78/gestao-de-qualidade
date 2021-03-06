import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-black.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const user = useSelector(state => state.user.user);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Qualyteam" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{user.name}</strong>
              <span>My business</span>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Nome do gestor"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
