/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import api from '~/services/api';

import { Container, Nonconformity } from './styles';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [nonconformities, setNonconformities] = useState([]);

  useEffect(() => {
    async function loadNonconformities() {
      const response = await api.get(`non_conformities?_page=${page}&_limit=8`);

      const newNonConformities = nonconformities.concat(response.data);

      setNonconformities(newNonConformities);
    }

    loadNonconformities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

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
        {nonconformities.map(nonconformity => (
          <Nonconformity key={nonconformity.id} status={nonconformity.status}>
            <hr />
            <div>
              <div>
                <strong>{nonconformity.name}</strong>
                <span>{nonconformity.ocurrence_date}</span>
              </div>
              <div>
                <span>#{nonconformity.id}</span>
              </div>
            </div>
          </Nonconformity>
        ))}
      </ul>
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </Container>
  );
}
