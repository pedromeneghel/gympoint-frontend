import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import {
  enrollmentAddSuccess,
  enrollmentAddFailure,
  enrollmentEditSuccess,
  enrollmentEditFailure,
} from './actions';

export function* enrollmentAdd({ payload }) {
  try {
    const { studentId, planId, startDate } = payload.data;
    const plan = planId.split('|');

    const response = yield call(api.post, 'enrollments', {
      student_id: studentId,
      plan_id: plan[0],
      start_date: startDate,
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

export function* enrollmentEdit({ payload }) {
  try {
    const { studentId, planId, startDate, idEnrollment } = payload.data;
    const plan = planId.split('|');

    const response = yield call(api.put, `enrollments/${idEnrollment}`, {
      student_id: studentId,
      plan_id: plan[0],
      start_date: startDate,
    });

    yield put(enrollmentEditSuccess(response.data));

    toast.success('Show! Matrícula editada com sucesso!');

    history.push('/enrollments');
  } catch (err) {
    toast.error('Ops, algo deu errado! Não foi possível editar a mátricula.');
    yield put(enrollmentEditFailure());
  }
}

export default all([
  takeLatest('@enrollment/ENROLLMENT_ADD_REQUEST', enrollmentAdd),
  takeLatest('@enrollment/ENROLLMENT_EDIT_REQUEST', enrollmentEdit),
]);
