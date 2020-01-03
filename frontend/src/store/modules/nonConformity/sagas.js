import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* createNonConformity({ payload }) {
  try {
    const { name, description, date, multiselect } = payload.data;

    const response = yield call(api.post, 'non_conformities', {
      name,
      description,
      ocurrence_date: date,
      departments: multiselect,
      corrective_actions: []
    });

    toast.success(`Nonconformity ${response.name} successfully created!`);

    history.push('/dashboard');
  } catch (err) {
    toast.error(`Error creating nonconformity, check the fields!`);
  }
}

export default all([
  takeLatest(
    '@nonConformity/CREATE_NON_CONFORMITY_REQUEST',
    createNonConformity
  )
]);
