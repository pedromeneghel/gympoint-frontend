import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import { parseISO, addMonths, format, isDate } from 'date-fns';
import * as Yup from 'yup';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { enrollmentAddRequest } from '~/store/modules/enrollments/actions';
import api from '~/services/api';

import ReactSelect from '~/components/ReactSelect';
import { FormContent } from '~/pages/Enrollments/styles';

const formatPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const students = async search => {
  const params = {
    q: search,
  };
  const response = await api.get('students', { params });

  const data = response.data.map(student => {
    return {
      id: student.id,
      title: student.name,
    };
  });

  return data;
};

export default function EnrollmentsAdd() {
  const [plans, setPlans] = useState([]);
  const [dataPlan, setDataPlan] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    student_id: Yup.number()
      .integer()
      .required('Selecione um aluno')
      .typeError('Selecione um aluno.'),
    plan_id: Yup.string().required('Selecione um plano'),
    start_date: Yup.date()
      .required('Informe a data de início')
      .typeError('Informe uma data válida.'),
  });

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => {
        return {
          id: `${plan.id}|${plan.duration}|${plan.price}`,
          title: plan.title,
        };
      });

      setPlans(data);
    }

    loadPlans();
  }, []);

  useEffect(() => {
    if (dataPlan && startDate) {
      const infoPlan = dataPlan.split('|');
      const dataTmp = addMonths(parseISO(startDate), Number(infoPlan[1]));

      // Calculando data de término
      if (isDate(dataTmp)) {
        setEndDate(format(dataTmp, 'dd/MM/yyyy'));
      }

      // Fomatando preço
      setPrice(formatPrice.format(Number(infoPlan[1] * Number(infoPlan[2]))));
    } else {
      setEndDate('');
      setPrice('');
    }
  }, [dataPlan, startDate]);

  function handleSubmit(data) {
    dispatch(enrollmentAddRequest(data));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <section className="title">
          <h1>Cadastro de matrícula</h1>
          <div className="actionBar">
            <Link to="/enrollments" className="default">
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
            <label htmlFor="student_id">Aluno</label>
            <ReactSelect
              name="student_id"
              id="student_id"
              options={students}
              placeholder="Selecione um aluno"
            />

            <div className="columns">
              <div>
                <label htmlFor="plan_id">Plano</label>
                <Select
                  name="plan_id"
                  options={plans}
                  onChange={e => setDataPlan(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="start_date">Data de Início</label>
                <Input
                  type="date"
                  name="start_date"
                  onChange={date => setStartDate(date.target.value)}
                />
              </div>
              <div>
                <label htmlFor="end_date">Data de Término</label>
                <Input
                  id="end_date"
                  type="text"
                  name="end_date"
                  value={endDate}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="total_price">Valor Final</label>
                <Input
                  type="text"
                  id="total_price"
                  name="total_price"
                  value={price}
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
