import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/STUDENT_ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/STUDENT_ADD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/STUDENT_ADD_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@student/STUDENT_EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/STUDENT_EDIT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/STUDENT_EDIT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
