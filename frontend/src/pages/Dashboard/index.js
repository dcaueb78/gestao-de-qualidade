import React from 'react';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Container, Nonconformity, Status } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <div>
          <button type="button">
            <MdAdd size={44} color="#fff" />
          </button>
          <strong>New</strong>
        </div>
      </header>

      <ul>
        <Nonconformity>
          <div>
            <Status value={1} />
            <strong>Nome</strong>
          </div>
          <span>Date</span>
        </Nonconformity>
        <Nonconformity>
          <div>
            <Status value={1} />
            <strong>Nome</strong>
          </div>
          <span>Date</span>
        </Nonconformity>
        <Nonconformity>
          <div>
            <Status value={1} />
            <strong>Nome</strong>
          </div>
          <span>Date</span>
        </Nonconformity>
        <Nonconformity>
          <div>
            <Status value={1} />
            <strong>Nome</strong>
          </div>
          <span>Date</span>
        </Nonconformity>
      </ul>
    </Container>
  );
}
