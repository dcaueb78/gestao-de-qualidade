import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  const { name, email } = payload;

  if (email === 'email@utilizado.com') {
    toast.error('Email already used in trial');
    yield put(signInFailure());
    return;
  }

  const user = { name, email };
  yield put(signInSuccess(user));
  history.push('dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
