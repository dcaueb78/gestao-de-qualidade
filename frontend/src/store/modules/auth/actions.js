export function signInRequest(name, email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { name, email }
  };
}

export function signInSuccess(name, email) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { name, email }
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  };
}
