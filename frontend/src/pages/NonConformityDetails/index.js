/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

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

  async function createNotification(status) {
    if (status === 1) {
      status = 'Success in';
    } else if (status === 2) {
      status = 'Failure in';
    } else {
      status = 'In progress';
    }

    await api.post('notifications', {
      content: `${status} nonconformity corrective: ${nonconformity.name}`,
      read: false
    });

    toast.success('Successfully updated');
    history.goBack();
  }

  async function handleSuccess() {
    try {
      const response = await api.patch(`non_conformities/${nonconformity.id}`, {
        status: 1
      });
      setNonconformity(response.data);
      createNotification(response.data.status);
    } catch (err) {
      toast.error('There was a problem updating, please try again!');
    }
  }

  async function handleInProgress() {
    try {
      const response = await api.patch(`non_conformities/${nonconformity.id}`, {
        status: 0
      });
      setNonconformity(response.data);
      createNotification(response.data.status);
    } catch (err) {
      toast.error('There was a problem updating, please try again!');
    }
  }

  async function handleFailure() {
    try {
      const response = await api.patch(`non_conformities/${nonconformity.id}`, {
        status: 2
      });
      setNonconformity(response.data);
      createNotification(response.data.status);
    } catch (err) {
      toast.error('There was a problem updating, please try again!');
    }
  }

  function handleNewCorrectiveAction() {
    history.push(`/corrective-actions/${nonconformity.id}/create`);
  }

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
            <span key={department}>{department}</span>
          ))}
        </div>
        <div className="status-buttons">
          <button onClick={handleFailure} type="button">
            Failure
          </button>
          <button onClick={handleInProgress} type="button">
            In progress
          </button>
          <button onClick={handleSuccess} type="button">
            Sucess
          </button>
        </div>
      </div>
      {correctiveActions.map((correctiveAction, index) => (
        <div className="correctiveActionDiv" key={correctiveAction.id}>
          <strong>Corrective action {index + 1}</strong>
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
      <footer onClick={handleNewCorrectiveAction}>
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

ConformityDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};
