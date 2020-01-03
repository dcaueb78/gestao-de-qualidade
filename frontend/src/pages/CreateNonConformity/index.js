/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import ReactMultiSelect from '~/components/ReactSelect';
import ReactDatePicker from '~/components/ReactDatePicker';

import { createNonConformityRequest } from '~/store/modules/nonConformity/actions';

import api from '~/services/api';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter a name'),
  description: Yup.string().required('Enter a description'),
  date: Yup.date().required('Enter a date'),
  multiselect: Yup.array().required('Enter a department')
});

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
      <h1>Create Nonconformity</h1>
      <hr />
      <Form schema={schema} onSubmit={handleSubmit}>
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

        <label htmlFor="departments">
          Departments: <span>*</span>
        </label>
        <ReactMultiSelect
          name="multiselect"
          id="departments"
          multiple
          options={departments}
        />
        <button type="submit">Create Nonconformity</button>
      </Form>
    </Container>
  );
}
