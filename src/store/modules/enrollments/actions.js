export function enrollmentAddRequest(data) {
  return {
    type: '@enrollment/ENROLLMENT_ADD_REQUEST',
    payload: { data },
  };
}

export function enrollmentAddSuccess(data) {
  return {
    type: '@enrollment/ENROLLMENT_ADD_SUCCESS',
    payload: { data },
  };
}

export function enrollmentAddFailure() {
  return {
    type: '@enrollment/ENROLLMENT_ADD_FAILURE',
  };
}
