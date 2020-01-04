import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Container } from './styles';

export default function ConformityDetails({ match }) {
  const [nonconformity, setNonconformity] = useState({});
  const [departments, setDepartments] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    async function loadNonconformity() {
      const responseNonconformity = await api.get(
        `non_conformities/${match.params.id}`
      );

      setNonconformity(responseNonconformity.data);

      const temp = [];

      responseNonconformity.data.departments.map(async (department, index) => {
        const response = await api.get(`departments/${department}`);
        temp.push(response.data.name);
        if (responseNonconformity.data.departments.length - 1 === index) {
          setDepartments(temp);
        }
      });
    }

    loadNonconformity();
  }, []);

  return (
    <Container status={nonconformity.status}>
      <div>
        <strong>{nonconformity.name}</strong>
        <hr />
        <span>{nonconformity.description}</span>
        <div>
          {departments.map(department => (
            <span>{department}</span>
          ))}
        </div>
      </div>
    </Container>
  );
}
