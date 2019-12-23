import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { FormContent } from '~/pages/Plans/styles';

export default function PlansEdit() {
  return (
    <>
      <section className="title">
        <h1>Edição de plano</h1>
        <div className="actionBar">
          <Link to="/plans" className="default">
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
            <label htmlFor="title">Tipo do Plano</label>
            <Input id="title" name="title" />
            <div>
              <div>
                <label htmlFor="duration">
                  Duração <span>(em meses)</span>
                </label>
                <Input type="number" id="duration" name="duration" />
              </div>
              <div>
                <label htmlFor="price">Preço Mensal</label>
                <Input type="number" id="price" name="price" />
              </div>
              <div>
                <label htmlFor="totalPrice">Preço Total</label>
                <Input
                  type="number"
                  id="totalPrice"
                  name="totalPrice"
                  disabled
                />
              </div>
            </div>
          </Form>
        </FormContent>
      </section>
    </>
  );
}
