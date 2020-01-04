import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function ConformityDetails({ match }) {
  const [nonconformity, setNonconformity] = useState({});
  const [departments, setDepartments] = useState([]);
  const [correctiveActions, setCorrectiveActions] = useState([]);

  useEffect(() => {
    async function loadNonconformity() {
      const responseNonconformity = await api.get(
        `non_conformities/${match.params.id}`
      );

      setNonconformity(responseNonconformity.data);

      const departmentsTemp = [];
      responseNonconformity.data.departments.map(async (department, index) => {
        const response = await api.get(`departments/${department}`);
        departmentsTemp.push(response.data.name);
        if (responseNonconformity.data.departments.length - 1 === index) {
          setDepartments(departmentsTemp);
        }
      });

      const correctiveActionTemp = [];
      responseNonconformity.data.corrective_actions.map(
        async (correctiveAction, index) => {
          const response = await api.get(
            `corrective_actions/${correctiveAction}`
          );

          correctiveActionTemp.push(response.data);
          if (
            responseNonconformity.data.corrective_actions.length - 1 ===
            index
          ) {
            setCorrectiveActions(correctiveActionTemp);
          }
        }
      );
    }

    loadNonconformity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container status={nonconformity.status}>
      <div>
        <strong>{nonconformity.name}</strong>
        <time>
          <span>{nonconformity.ocurrence_date}</span>
        </time>
        <hr />
        <span>{nonconformity.description}</span>
        <div>
          {departments.map(department => (
            <span>{department}</span>
          ))}
        </div>
      </div>
      {correctiveActions.map((correctiveAction, index) => (
        <div className="correctiveActionDiv" key={correctiveAction.id}>
          <strong>Corrective action {index}</strong>
          <hr />
          <div className="corrective-actions-field">
            <strong className="corrective-actions-title">What to do:</strong>
            <span>{correctiveAction.what_to_do}</span>
          </div>
          <hr />
          <div className="corrective-actions-field">
            <strong className="corrective-actions-title">Why to do it:</strong>
            <span>{correctiveAction.why_to_do_it}</span>
          </div>
          <hr />
          <div className="corrective-actions-field">
            <strong className="corrective-actions-title">How to do it:</strong>
            <span>{correctiveAction.how_to_do_it}</span>
          </div>
          <hr />
          <div className="corrective-actions-field">
            <strong className="corrective-actions-title">
              Where to do it:
            </strong>
            <span>{correctiveAction.where_to_do_it}</span>
          </div>
          <hr />
          <div className="corrective-actions-field">
            <strong className="corrective-actions-title">Until when:</strong>
            <span>{correctiveAction.until_when}</span>
          </div>
        </div>
      ))}
      <footer>
        <div>
          <button type="button">
            <MdAdd size={44} color="#fff" />
          </button>
          <strong>New</strong>
        </div>
      </footer>
    </Container>
  );
}
