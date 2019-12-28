import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { enrollmentAddSuccess, enrollmentAddFailure } from './actions';

export function* enrollmentAdd({ payload }) {
  try {
    const { student_id, plan_id: planId, start_date } = payload.data;
    const plan = planId.split('|');

    const response = yield call(api.post, 'enrollments', {
      student_id,
      plan_id: plan[0],
      start_date,
    });

    yield put(enrollmentAddSuccess(response.data));

    toast.success('Show! Matrícula registrada com sucesso!');

    history.push('/enrollments');
  } catch (err) {
    toast.error(
      'Ops, algo deu errado! Não foi possível registrar a mátricula.'
    );
    yield put(enrollmentAddFailure());
  }
}

export default all([
  takeLatest('@enrollment/ENROLLMENT_ADD_REQUEST', enrollmentAdd),
]);
