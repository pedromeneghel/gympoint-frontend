import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { planAddRequest } from '~/store/modules/plans/actions';

import { FormContent } from '~/pages/Plans/styles';

export default function PlansAdd() {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const formatPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    setTotal(formatPrice.format(Number(duration) * Number(price)));
  }, [duration, price]);

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

  function handleSubmit(data) {
    dispatch(planAddRequest(data));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <section className="title">
          <h1>Cadastro de plano</h1>
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
            <Input label="Nome do Plano" id="title" name="title" />
            <div>
              <div>
                <Input
                  label="Duração (em meses)"
                  type="text"
                  id="duration"
                  name="duration"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Preço Mensal"
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Preço Total"
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
