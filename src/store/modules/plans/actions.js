export function planAddRequest(data) {
  return {
    type: '@plan/PLAN_ADD_REQUEST',
    payload: { data },
  };
}

export function planAddSuccess(data) {
  return {
    type: '@plan/PLAN_ADD_SUCCESS',
    payload: { data },
  };
}

export function planAddFailure() {
  return {
    type: '@plan/PLAN_ADD_FAILURE',
  };
}
