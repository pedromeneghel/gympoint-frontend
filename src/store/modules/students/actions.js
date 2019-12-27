export function studentAddRequest(data) {
  return {
    type: '@student/STUDENT_ADD_REQUEST',
    payload: { data },
  };
}

export function studentAddSuccess(data) {
  return {
    type: '@student/STUDENT_ADD_SUCCESS',
    payload: { data },
  };
}

export function studentAddFailure() {
  return {
    type: '@student/STUDENT_ADD_FAILURE',
  };
}
