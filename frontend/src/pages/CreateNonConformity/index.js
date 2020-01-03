/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import ReactMultiSelect from '~/components/ReactSelect';
import ReactDatePicker from '~/components/ReactDatePicker';

import { createNonConformityRequest } from '~/store/modules/nonConformity/actions';

import api from '~/services/api';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

export default function CreateNonConformity() {
  const dispatch = useDispatch();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      const response = await api.get('departments');

      setDepartments(
        response.data.map(department =>
          !department.label
            ? {
                ...department,
                label: department.name,
                value: department.name,
                title: department.name
              }
            : department
        )
      );
    }

    loadDepartments();
  }, []);

  function handleSubmit(data) {
    dispatch(createNonConformityRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nonconformity name: <span>*</span>
        </label>
        <Input type="text" id="name" name="name" placeholder="Name" />
        <label htmlFor="description">
          Description: <span>*</span>
        </label>
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <label htmlFor="date">
          Occurrence Date: <span>*</span>
        </label>
        <ReactDatePicker name="date" id="date" />

        <label htmlFor="date">
          Departments: <span>*</span>
        </label>
        <ReactMultiSelect name="multiselect" multiple options={departments} />
        <button type="submit">Create Nonconformity</button>
      </Form>
    </Container>
  );
}
