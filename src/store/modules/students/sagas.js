import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { studentAddSuccess, studentAddFailure } from './actions';

export function* studentAdd({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;

    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(studentAddSuccess(response.data));

    toast.success('Show! Aluno cadastrado com sucesso!');

    history.push('/students');
  } catch (err) {
    toast.error('Ops, algo deu errado! Não foi possível cadastrar o aluno.');
    yield put(studentAddFailure());
  }
}

export default all([takeLatest('@student/STUDENT_ADD_REQUEST', studentAdd)]);
