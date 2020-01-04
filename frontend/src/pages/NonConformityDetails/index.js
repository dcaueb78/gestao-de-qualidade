import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Container } from './styles';

export default function ConformityDetails({ match }) {
  const [nonconformity, setNonconformity] = useState({});

  useEffect(() => {
    async function loadNonconformity() {
      const response = await api.get(`non_conformities/${match.params.id}`);

      setNonconformity(response.data);
    }

    loadNonconformity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container status={nonconformity.status}>
      <div>
        <strong>{nonconformity.name}</strong>
        <hr />
        <span>{nonconformity.description}</span>
      </div>
    </Container>
  );
}
