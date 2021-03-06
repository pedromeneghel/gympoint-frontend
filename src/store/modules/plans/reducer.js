import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/PLAN_ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/PLAN_ADD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/PLAN_ADD_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@plan/PLAN_EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/PLAN_EDIT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/PLAN_EDIT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
