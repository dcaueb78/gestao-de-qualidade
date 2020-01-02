export function signInRequest(name, email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { name, email }
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  };
}
