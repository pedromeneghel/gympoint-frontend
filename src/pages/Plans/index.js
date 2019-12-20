import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

export default function PlansList() {
  return (
    <>
      <section className="title">
        <h1>Genreciador de Planos</h1>
        <button type="button" className="secondary">
          <MdAdd size={24} />
          Cadastrar
        </button>
      </section>
      <section className="content">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Duração</th>
              <th>Valor p/ Mês</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start</td>
              <td>1 mês</td>
              <td>R$129,00</td>
              <td>
                <Link to="/" className="edit">
                  editar
                </Link>
                <Link to="/" className="delete">
                  apagar
                </Link>
              </td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>2 meses</td>
              <td>R$109,00</td>
              <td>
                <Link to="/" className="edit">
                  editar
                </Link>
                <Link to="/" className="delete">
                  apagar
                </Link>
              </td>
            </tr>
            <tr>
              <td>Diamond</td>
              <td>3 meses</td>
              <td>R$89,00</td>
              <td>
                <Link to="/" className="edit">
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
