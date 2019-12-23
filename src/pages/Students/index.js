import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

export default function StudentsList() {
  return (
    <>
      <section className="title">
        <h1>Gerenciando Alunos</h1>
        <div className="actionBar">
          <button type="button" className="secondary">
            <MdAdd size={24} />
            Cadastrar
          </button>
          <div className="search">
            <i>
              <MdSearch size={24} />
            </i>
            <input
              type="text"
              name="searchStudent"
              placeholder="Buscar aluno"
            />
          </div>
        </div>
      </section>
      <section className="content">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
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
              <td>Cha Ji-Hun</td>
              <td>example@intellecti.com.br</td>
              <td>20</td>
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
              <td>Cha Ji-Hun</td>
              <td>example@intellecti.com.br</td>
              <td>20</td>
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
              <td>Cha Ji-Hun</td>
              <td>example@intellecti.com.br</td>
              <td>20</td>
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
              <td>Cha Ji-Hun</td>
              <td>example@intellecti.com.br</td>
              <td>20</td>
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
              <td>Cha Ji-Hun</td>
              <td>example@intellecti.com.br</td>
              <td>20</td>
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
