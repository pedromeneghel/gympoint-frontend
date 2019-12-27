import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import ReactSelect from '~/components/ReactSelect';
import DatePicker from '~/components/DatePicker';

import { FormContent } from '~/pages/Enrollments/styles';

import api from '~/services/api';

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

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' },
];

export default function EnrollmentsAdd() {
  const schema = Yup.object().shape({
    student_id: Yup.number()
      .integer()
      .required('Selecione um aluno')
      .typeError('Selecione um aluno.'),
  });

  function handleSubmit(data) {
    console.log(data);
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
                <Select id="plan_id" name="plan_id" options={options} />
              </div>
              <div>
                <label htmlFor="start_date">Data de Início</label>
                <DatePicker name="start_date" />
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
