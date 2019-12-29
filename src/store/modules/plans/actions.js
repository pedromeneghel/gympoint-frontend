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
export function planEditRequest(data) {
  return {
    type: '@plan/PLAN_EDIT_REQUEST',
    payload: { data },
  };
}

export function planEditSuccess(data) {
  return {
    type: '@plan/PLAN_EDIT_SUCCESS',
    payload: { data },
  };
}

export function planEditFailure() {
  return {
    type: '@plan/PLAN_EDIT_FAILURE',
  };
}
