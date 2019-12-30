import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { parseISO, addMonths, format, isDate } from 'date-fns';
import * as Yup from 'yup';
import ReactSelect from '~/components/ReactSelect';

import api from '~/services/api';
import { FormContent } from '~/pages/Enrollments/styles';

const formatPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function EnrollmentsEdit() {
  const { idEnrollment } = useParams();
  const [enrollmentData, setEnrollmentData] = useState('');
  const [plans, setPlans] = useState([]);
  const [dataPlan, setDataPlan] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  // const dispatch = useDispatch();

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
  }, []); // eslint-disable-line

  useEffect(() => {
    async function loadEnrollmentData() {
      const response = await api.get(`enrollments/${idEnrollment}`);
      const dataTemp = response.data[0];

      const data = {
        id: dataTemp.id,
        start_date: format(parseISO(dataTemp.start_date), 'dd/MM/yyyy'),
        end_date: format(parseISO(dataTemp.end_date), 'dd/MM/yyyy'),
        total_price: formatPrice.format(dataTemp.price),
        student_id: dataTemp.student.id,
        plan_id: `${dataTemp.plan.id}|${dataTemp.plan.duration}|${dataTemp.plan.price}`,
      };

      setEnrollmentData(data);
    }

    loadEnrollmentData();
  }, [plans]); // eslint-disable-line

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

  function handleSubmit(data) {}

  return (
    <>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={enrollmentData}
      >
        <section className="title">
          <h1>Edição de matrícula</h1>
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
              name="student_id"
              options={students}
              placeholder="Selecione um aluno"
              defaultValue={enrollmentData.student_id}
              label="Aluno"
            />
            <div className="columns">
              <div>
                <Select
                  label="Plano"
                  name="plan_id"
                  options={plans}
                  value={enrollmentData.plan_id}
                />
              </div>
              <div>
                <Input
                  label="Data de Início"
                  type="text"
                  id="start_date"
                  name="start_date"
                />
              </div>
              <div>
                <Input
                  label="Data de Término"
                  id="end_date"
                  type="text"
                  name="end_date"
                  disabled
                />
              </div>
              <div>
                <Input
                  label="Valor Final"
                  type="text"
                  id="total_price"
                  name="total_price"
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
