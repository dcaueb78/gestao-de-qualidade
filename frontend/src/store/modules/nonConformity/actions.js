export function createNonConformityRequest(data) {
  return {
    type: '@nonConformity/CREATE_NON_CONFORMITY_REQUEST',
    payload: { data }
  };
}
