import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/ENROLLMENT_ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/ENROLLMENT_ADD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@enrollment/ENROLLMENT_ADD_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
