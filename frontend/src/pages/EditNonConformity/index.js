import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import ReactMultiSelect from '~/components/ReactSelect';
import ReactDatePicker from '~/components/ReactDatePicker';

import { Container } from './styles';

export default function ConformityDetails({ match }) {
  return (
    <Container>
      <h1>Create Nonconformity</h1>
      <hr />
      <Form>
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
          // options={departments}
        />
        <button type="submit">Create Nonconformity</button>
      </Form>
    </Container>
  );
}
