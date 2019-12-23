import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';

import { FormContent } from '~/pages/Enrollments/styles';

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' },
];

export default function EnrollmentsEdit() {
  return (
    <>
      <section className="title">
        <h1>Edição de matrícula</h1>
        <div className="actionBar">
          <Link to="/enrollments" className="default">
            <MdKeyboardArrowLeft size={24} />
            Voltar
          </Link>
          <button type="button" className="secondary margin-left-15">
            <MdCheck size={24} />
            Salvar
          </button>
        </div>
      </section>
      <section className="content">
        <FormContent>
          <Form>
            <label htmlFor="student_id">Aluno</label>
            <Select id="student_id" name="student_id" options={options} />
            <div>
              <div>
                <label htmlFor="plan_id">Plano</label>
                <Select id="plan_id" name="plan_id" options={options} />
              </div>
              <div>
                <label htmlFor="start_date">Data de Início</label>
                <Input type="date" id="start_date" name="start_date" />
              </div>
              <div>
                <label htmlFor="end_date">Data de Término</label>
                <Input id="end_date" type="date" name="end_date" disabled />
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
          </Form>
        </FormContent>
      </section>
    </>
  );
}
