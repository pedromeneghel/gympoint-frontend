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

export default function EnrollmentsAdd() {
  const [plans, setPlans] = useState([]);
  const [dataPlan, setDataPlan] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    studentId: Yup.number()
      .integer()
      .required('Selecione um aluno')
      .typeError('Selecione um aluno.'),
    planId: Yup.string().required('Selecione um plano'),
    startDate: Yup.date()
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

  async function students(search) {
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
  }

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
            <ReactSelect
              label="Aluno"
              name="studentId"
              options={students}
              placeholder="Selecione um aluno"
            />

            <div className="columns">
              <div>
                <Select
                  label="Plano"
                  name="planId"
                  options={plans}
                  onChange={e => setDataPlan(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Data de Início"
                  type="date"
                  name="startDate"
                  onChange={date => setStartDate(date.target.value)}
                />
              </div>
              <div>
                <Input
                  label="Data de Término"
                  type="text"
                  name="endDate"
                  value={endDate}
                  disabled
                />
              </div>
              <div>
                <Input
                  label="Valor Final"
                  type="text"
                  name="totalPrice"
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
