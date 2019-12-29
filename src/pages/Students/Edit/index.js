import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import { studentEditRequest } from '~/store/modules/students/actions';

import { FormContent } from '~/pages/Students/styles';

export default function StudentsEdit() {
  const dispatch = useDispatch();
  const { idStudent } = useParams();
  const [studantData, setStudentData] = useState([]);
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Informe o nome completo do aluno')
      .required('Informe o nome completo do aluno'),
    email: Yup.string()
      .email('Informe um endereço de e-mail válido')
      .required('Informe o endereço de e-mail do aluno'),
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

  useEffect(() => {
    async function loadStudentData() {
      const response = await api.get(`students/${idStudent}`);

      setStudentData(response.data[0]);
    }

    loadStudentData();
  }, [idStudent]);

  function handleSubmit(data) {
    dispatch(studentEditRequest({ ...data, idStudent }));
  }
  return (
    <>
      <Form initialData={studantData} onSubmit={handleSubmit} schema={schema}>
        <section className="title">
          <h1>Edição do aluno</h1>
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
                <Input type="number" id="weight" name="weight" />
              </div>
              <div>
                <label htmlFor="height">Altura</label>
                <Input type="number" id="height" name="height" />
              </div>
            </div>
          </FormContent>
        </section>
      </Form>
    </>
  );
}
