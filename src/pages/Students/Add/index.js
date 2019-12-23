import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { FormContent } from '~/pages/Students/styles';

export default function StudentsAdd() {
  return (
    <>
      <section className="title">
        <h1>Cadastro de aluno</h1>
        <div className="actionBar">
          <Link to="/students" className="default">
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
                <Input type="number" id="weight" name="weight" />
              </div>
              <div>
                <label htmlFor="height">Altura</label>
                <Input type="number" id="height" name="height" />
              </div>
            </div>
          </Form>
        </FormContent>
      </section>
    </>
  );
}
