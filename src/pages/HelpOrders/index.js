import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpOrdersList() {
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
            <tr>
              <td>Chan Ji-Hun</td>
              <td>
                <a className="edit" href="#open-modal">
                  responder
                </a>
              </td>
            </tr>
            <tr>
              <td>Chan Ji-Hun</td>
              <td>
                <a className="edit" href="#open-modal">
                  responder
                </a>
              </td>
            </tr>
            <tr>
              <td>Chan Ji-Hun</td>
              <td>
                <a className="edit" href="#open-modal">
                  responder
                </a>
              </td>
            </tr>
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
