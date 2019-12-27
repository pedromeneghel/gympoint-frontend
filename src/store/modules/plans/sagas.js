import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { planAddSuccess, planAddFailure } from './actions';

export function* planAdd({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const response = yield call(api.post, 'plans', {
      title,
      duration,
      price,
    });

    yield put(planAddSuccess(response.data));

    toast.success('Show! Plano cadastrado com sucesso!');

    history.push('/plans');
  } catch (err) {
    toast.error('Ops, algo deu errado! Não foi possível cadastrar o plano.');
    yield put(planAddFailure());
  }
}

export default all([takeLatest('@plan/PLAN_ADD_REQUEST', planAdd)]);
