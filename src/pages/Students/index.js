import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

export default function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        const response = await api.get('students');
        setStudents(response.data);
      } catch {
        toast.error('Não foi possível carregar a listagem de alunos.');
      }
    }

    loadStudents();
  }, []); // eslint-disable-line
  return (
    <>
      <section className="title">
        <h1>Gerenciando Alunos</h1>
        <div className="actionBar">
          <Link to="/students/add" className="secondary">
            <MdAdd size={24} />
            Cadastrar
          </Link>
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
            {students && students.length > 0 ? (
              students.map(student => (
                <tr key={String(student.id)}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td>
                    <Link to="/students/edit" className="edit">
                      editar
                    </Link>
                    <Link to="/" className="delete">
                      apagar
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Não foi encontrado nenhum aluno cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
