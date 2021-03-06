import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

const formatPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function PlansList() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await api.get(`plans`);
        setPlans(response.data);
      } catch {
        toast.error('Não foi possível carregar a listagem de planos.');
      }
    }

    loadPlans();
  }, []);

  async function handleDelete(id) {
    if (window.confirm('Você confirma a exlusão deste plano?')) {
      try {
        await api.delete(`plans/${id}`);

        toast.success('Plano excluído com sucesso.');
        setPlans(plans.filter(plan => plan.id !== id));
      } catch {
        toast.error('Ops, algo deu errado? Não foi possível excluír o plano.');
      }
    }
  }

  return (
    <>
      <section className="title">
        <h1>Gerenciando Planos</h1>
        <Link to="/plans/add" className="secondary">
          <MdAdd size={24} />
          Cadastrar
        </Link>
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
            {plans && plans.length > 0 ? (
              plans.map(plan => (
                <tr key={String(plan.id)}>
                  <td>{plan.title}</td>
                  <td>
                    {plan.duration} {plan.duration > 1 ? 'meses' : 'mês'}
                  </td>
                  <td>{formatPrice.format(plan.price)}</td>
                  <td>
                    <Link to={`/plans/edit/${plan.id}`} className="edit">
                      editar
                    </Link>
                    <Link
                      to
                      className="delete"
                      onClick={() => handleDelete(plan.id)}
                    >
                      apagar
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum plano foi encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
