import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FormContent } from '~/pages/Students/styles';

export default function StudentsAdd() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Informe o nome completo do aluno')
      .required('Informe o nome completo do aluno'),
    email: Yup.string()
      .email('Informe um endereço de e-mail válido')
      .required('Inform o endereço de e-mail do aluno'),
    age: Yup.number()
      .integer()
      .min(1, 'Informe a idade do aluno')
      .required('Informe a idade do aluno.')
      .typeError('Informe a idade do aluno'),
    weight: Yup.number()
      .min(1, 'Informe a peso do aluno')
      .required('Informe a peso do aluno.')
      .typeError('Informe o peso do aluno'),
    height: Yup.number()
      .min(1, 'Informe a altura do aluno')
      .required('Informe a altura do aluno.')
      .typeError('Informe a altura do aluno'),
  });

  function handleSubmit({ name, email, age, wieght, height }) {
    alert();
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <section className="title">
          <h1>Cadastro de aluno</h1>
          <div className="actionBar">
            <Link to="/students" className="default">
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
            <label htmlFor="name">Nome completo</label>
            <Input id="name" name="name" />
            <label htmlFor="email">Endereço de E-mail</label>
            <Input type="email" id="email" name="email" />
            <div>
              <div>
                <label htmlFor="age">Idade</label>
                <Input type="number" id="age" name="age" />
              </div>
              <div>
                <label htmlFor="weight">Peso</label>
                <Input
                  type="number"
                  id="weight"
                  name="weight"
                  step="0.01"
                  min="0"
                />
              </div>
              <div>
                <label htmlFor="height">Altura</label>
                <Input
                  type="number"
                  id="height"
                  name="height"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </FormContent>
        </section>
      </Form>
    </>
  );
}
