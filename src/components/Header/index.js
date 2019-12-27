import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/images/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const nomeUser = useSelector(state => state.auth.user.name);

  function handleClick() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Gympoint" />
          </Link>
          <Link to="/students">Alunos</Link>
          <Link to="/plans">Planos</Link>
          <Link to="/enrollments">Matrículas</Link>
          <Link to="/help-orders">Pedidos de Auxílio</Link>
        </nav>
        <aside>
          <Profile>
            <strong>{nomeUser}</strong>
            <button type="button" onClick={() => handleClick()}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
