import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

export default function EnrollmentsList() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      try {
        const response = await api.get('enrollments');

        const dados = response.data.map(data => {
          return {
            start_date_formated: format(
              parseISO(data.start_date),
              "dd' de 'MMMM' de 'yyyy",
              { locale: pt }
            ),
            end_date_formated: format(
              parseISO(data.end_date),
              "dd' de 'MMMM' de 'yyyy",
              { locale: pt }
            ),
            ...data,
          };
        });

        setEnrollments(dados);
      } catch {
        toast.error('Não foi possível carregar a listagem de matrículas.');
      }
    }

    loadEnrollments();
  }, []); //eslint-disable-line

  async function handleDelete(id) {
    if (window.confirm('Você confirma a exlusão da matrícula?')) {
      try {
        await api.delete(`enrollments/${id}`);

        toast.success('Matrícula excluída com sucesso.');
        setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
      } catch {
        toast.error(
          'Ops, algo deu errado? Não foi possível excluír a matrícula.'
        );
      }
    }
  }
  return (
    <>
      <section className="title">
        <h1>Gerenciando Matrículas</h1>
        <Link to="/enrollments/add" className="secondary">
          <MdAdd size={24} />
          Cadastrar
        </Link>
      </section>
      <section className="content">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Plano</th>
              <th>Início</th>
              <th>Término</th>
              <th>Ativa</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {enrollments && enrollments.length > 0 ? (
              enrollments.map(enrollment => (
                <tr>
                  <td>{enrollment.student.name}</td>
                  <td>{enrollment.plan.title}</td>
                  <td>{enrollment.start_date_formated}</td>
                  <td>{enrollment.end_date_formated}</td>
                  <td>
                    <MdCheckCircle
                      size={24}
                      color={enrollment.active ? '#42CB59' : '#ddd'}
                    />
                  </td>
                  <td>
                    <Link
                      to={`/enrollments/edit/${enrollment.id}`}
                      className="edit"
                    >
                      editar
                    </Link>
                    <Link
                      to
                      className="delete"
                      onClick={() => handleDelete(enrollment.id)}
                    >
                      apagar
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Não encontrada nenhuma mátricula.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
