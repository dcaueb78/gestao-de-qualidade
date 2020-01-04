import React from 'react';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Container, Nonconformity } from './styles';

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
        <Nonconformity status={1}>
          <hr />
          <div>
            <div>
              <strong>Nome Nome Nome</strong>
              <span>17-10-2000</span>
            </div>
            <div>
              <span>#1</span>
            </div>
          </div>
        </Nonconformity>
        <Nonconformity status={2}>
          <hr />
          <div>
            <div>
              <strong>Nome Nome Nome</strong>
              <span>17-10-2000</span>
            </div>
            <div>
              <span>#1</span>
            </div>
          </div>
        </Nonconformity>
        <Nonconformity status={0}>
          <hr />
          <div>
            <div>
              <strong>Nome Nome Nome</strong>
              <span>17-10-2000</span>
            </div>
            <div>
              <span>#1</span>
            </div>
          </div>
        </Nonconformity>
        <Nonconformity status={1}>
          <hr />
          <div>
            <div>
              <strong>Nome Nome Nome</strong>
              <span>17-10-2000</span>
            </div>
            <div>
              <span>#1</span>
            </div>
          </div>
        </Nonconformity>
      </ul>
    </Container>
  );
}
