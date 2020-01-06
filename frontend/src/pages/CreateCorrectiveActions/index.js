/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import * as Yup from 'yup';

import ReactDatePicker from '~/components/ReactDatePicker';

import api from '~/services/api';
import history from '~/services/history';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

const schema = Yup.object().shape({
  what_to_do: Yup.string().required('Enter what to do'),
  why_to_do_it: Yup.string().required('Enter why to do it'),
  how_to_do_it: Yup.string().required('Enter how to do it'),
  where_to_do_it: Yup.string().required('Enter where to do it'),
  until_when: Yup.date('Enter a date').required('Enter until when')
});

export default function CreateCorrectiveActions({ match }) {
  const { id } = match.params;

  async function handleSubmit(data) {
    try {
      const {
        what_to_do,
        why_to_do_it,
        how_to_do_it,
        where_to_do_it,
        until_when
      } = data;

      const newCorrectiveAction = await api.post(`corrective_actions`, {
        what_to_do,
        why_to_do_it,
        how_to_do_it,
        where_to_do_it,
        until_when
      });

      const nonConformity = await api.get(`non_conformities/${id}`);

      const temp = nonConformity.data.corrective_actions;
      temp.push(newCorrectiveAction.data.id);

      await api.patch(`non_conformities/${id}`, {
        corrective_actions: temp
      });
      toast.success('Created successfully!');
      history.goBack();
    } catch (err) {
      toast.error('An error has occurred, please try again!');
    }
  }

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>
      <h1>Create Corrective Action</h1>
      <hr />
      <Form data-testid="submit" schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="what_to_do" data-testid="label">
          What to do:<span>*</span>
        </label>
        <Input
          data-testid="what_to_do"
          type="text"
          id="what_to_do"
          name="what_to_do"
          placeholder="What to do"
        />

        <label htmlFor="why_to_do_it">
          Why to do it: <span>*</span>
        </label>
        <Input
          type="text"
          id="why_to_do_it"
          name="why_to_do_it"
          placeholder="Why to do it"
        />

        <label htmlFor="how_to_do_itw">
          How to do it: <span>*</span>
        </label>
        <Input
          type="text"
          id="how_to_do_it"
          name="how_to_do_it"
          placeholder="How to do it"
        />

        <label htmlFor="where_to_do_it">
          Where to do it: <span>*</span>
        </label>
        <Input
          type="text"
          id="where_to_do_it"
          name="where_to_do_it"
          placeholder="Where to do it"
        />

        <label htmlFor="until_when">
          Until when: <span>*</span>
        </label>
        <ReactDatePicker name="until_when" id="until_when" />

        <button type="submit">Create Nonconformity</button>
      </Form>
      <button onClick={handleBack} type="button">
        Back
      </button>
    </Container>
  );
}

CreateCorrectiveActions.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};
