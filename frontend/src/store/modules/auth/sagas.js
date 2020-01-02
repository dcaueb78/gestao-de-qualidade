import { takeLatest, put, all } from 'redux-saga/effects';

import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { name, email } = payload;

  if (email === 'email@utilizado.com') {
    console.tron.error('email ja participou do trial');
    return;
  }

  yield put(signInSuccess(name, email));
  history.push('dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
