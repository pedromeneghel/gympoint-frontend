import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

export default function EnrollmentsList() {
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
            <tr>
              <td>Chan Ji-Hun</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle size={24} color="#42CB59" />
              </td>
              <td>
                <Link to="/enrollments/edit" className="edit">
                  editar
                </Link>
                <Link to="/" className="delete">
                  apagar
                </Link>
              </td>
            </tr>
            <tr>
              <td>Chan Ji-Hun</td>
              <td>Start</td>
              <td>30 de Abril de 2019</td>
              <td>30 de Maio de 2019</td>
              <td>
                <MdCheckCircle size={24} active="#ddd" />
              </td>
              <td>
                <Link to="/enrollments/edit" className="edit">
                  editar
                </Link>
                <Link to="/" className="delete">
                  apagar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
