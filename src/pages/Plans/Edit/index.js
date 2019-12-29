import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import { planEditRequest } from '~/store/modules/plans/actions';

import { FormContent } from '~/pages/Plans/styles';

const formatPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function PlansEdit() {
  const dispatch = useDispatch();
  const { idPlan } = useParams();
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [planData, setPlanData] = useState({});

  const schema = Yup.object().shape({
    title: Yup.string().required('Informa o nome do plano'),
    duration: Yup.number()
      .min(1, 'Informe uma duração válida')
      .integer('Informe um número válido.')
      .required('Informe o tempo de duração do plano'),
    price: Yup.number()
      .min(1, 'Informe um preço válido.')
      .integer('Informe um número válido.')
      .required('Informe o preço mensal do plano.'),
  });

  useEffect(() => {
    async function loadPlanData() {
      const response = await api.get(`plans/${idPlan}`);
      const data = response.data[0];

      setPlanData(data);
      setDuration(data.duration);
      setPrice(data.price);
      setTotal(formatPrice.format(Number(data.duration) * Number(data.price)));
    }

    loadPlanData();
  }, []); // eslint-disable-line

  useEffect(() => {
    setTotal(formatPrice.format(Number(duration) * Number(price)));
  }, [duration, price]);

  function handleSubmit(data) {
    const dataTemp = {
      ...data,
      idPlan,
    };

    dispatch(planEditRequest(dataTemp));
  }

  return (
    <>
      <Form initialData={planData} schema={schema} onSubmit={handleSubmit}>
        <section className="title">
          <h1>Edição de plano</h1>
          <div className="actionBar">
            <Link to="/plans" className="default">
              <MdKeyboardArrowLeft size={24} />
              Voltar
            </Link>
            <button type="submit" className="secondary margin-left-15">
              <MdCheck size={24} />
              Salvar
            </button>
          </div>
        </section>
        <section className="content">
          <FormContent>
            <label htmlFor="title">Tipo do Plano</label>
            <Input id="title" name="title" />
            <div>
              <div>
                <label htmlFor="duration">
                  Duração <span>(em meses)</span>
                </label>
                <Input
                  type="number"
                  id="duration"
                  name="duration"
                  onChange={e => setDuration(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price">Preço Mensal</label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="totalPrice">Preço Total</label>
                <Input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  value={total}
                  disabled
                />
              </div>
            </div>
          </FormContent>
        </section>
      </Form>
    </>
  );
}
