import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

export default function HelpOrdersList() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        const response = await api.get('help-orders');
        setHelpOrders(response.data);
      } catch {
        toast.error(
          'Não foi possível carregar a listagem de pedidos de ajuda.'
        );
      }
    }

    loadHelpOrders();
  }, []);

  return (
    <>
      <section className="title">
        <h1>Gerenciando Pedidos de Auxílio</h1>
      </section>
      <section className="content">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {helpOrders && helpOrders.length > 0 ? (
              helpOrders.map(help => (
                <tr key={String(help.id)}>
                  <td>{help.question}</td>
                  <td>
                    <a className="edit" href="#open-modal">
                      responder
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">
                  Não foi encontrado nenhum pedido de ajuda pendente de reposta.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div id="open-modal" className="modal-window">
          <div>
            <a className="modal-close" title="Fechar" href="#">
              Fechar
            </a>
            <h2>Pergunta do Aluno</h2>
            <p>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
              marmitas e lotar a geladeira? Dou um pico de insulina e jogo o
              hipercalórico?
            </p>
            <h2>Sua Resposta</h2>
            <textarea placeholder="exemplo@email.com" />
            <button type="button" className="primary">
              Responder Aluno
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
