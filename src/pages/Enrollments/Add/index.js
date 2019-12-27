import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';

import { FormContent } from '~/pages/Enrollments/styles';

import api from '~/services/api';

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' },
];

const students = async search => {
  const params = {
    q: search,
  };
  const response = await api.get('students', { params });

  const data = response.data.map(student => {
    return {
      value: student.id,
      label: student.name,
    };
  });

  return data;
};

export default function EnrollmentsAdd() {
  const [startDate, setStartDate] = useState('');
  /* const schema = Yup.object().shape({
    student_id: Yup.string().required('Selecione um aluno'),
  }); */

  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
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

            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={students}
              placeholder="Selecione um aluno"
            />
            <div className="columns">
              <div>
                <label htmlFor="plan_id">Plano</label>
                <Select id="plan_id" name="plan_id" options={options} />
              </div>
              <div>
                <label htmlFor="start_date">Data de Início</label>
                <DatePicker
                  id="start_date"
                  name="start_date"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div>
                <label htmlFor="end_date">Data de Término</label>
                <Input id="end_date" type="text" name="end_date" disabled />
              </div>
              <div>
                <label htmlFor="total_price">Valor Final</label>
                <Input
                  type="number"
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
