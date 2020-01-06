/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

import { Container, Nonconformity } from './styles';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [nonconformities, setNonconformities] = useState([]);

  useEffect(() => {
    async function loadNonconformities() {
      const response = await api.get(
        `non_conformities?_page=${page}&_limit=10`
      );
      if (!response.data.length) {
        toast.error('All nonconformities presented');
      } else {
        const newNonConformities = nonconformities.concat(response.data);
        newNonConformities.map(newNonConformity => {
          newNonConformity.dateFormatted = format(
            parseISO(newNonConformity.ocurrence_date),
            'MM/dd/yyyy',
            {
              locale: enUS
            }
          );
        });
        setNonconformities(newNonConformities);
      }
    }

    loadNonconformities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  function handleNewNonconformity() {
    history.push('/nonconformity/create');
  }

  function handleOpenNonConformity(id) {
    history.push(`/nonconformity/details/${id}`);
  }

  return (
    <Container>
      <header onClick={handleNewNonconformity}>
        <div>
          <button type="button">
            <MdAdd size={44} color="#fff" />
          </button>
          <strong>New</strong>
        </div>
      </header>

      <ul>
        {nonconformities.map(nonconformity => (
          <Nonconformity
            onClick={() => handleOpenNonConformity(nonconformity.id)}
            key={nonconformity.id}
            status={nonconformity.status}
          >
            <hr />
            <div>
              <div>
                <strong>{nonconformity.name}</strong>
                <span>{nonconformity.dateFormatted}</span>
              </div>
              <div>
                <span>#{nonconformity.id}</span>
              </div>
            </div>
          </Nonconformity>
        ))}
      </ul>
      <div className="load-more">
        <button type="button" onClick={handleLoadMore}>
          View more
        </button>
      </div>
    </Container>
  );
}
