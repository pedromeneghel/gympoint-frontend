import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/images/logo.svg';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
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
            <strong>Pedro Meneghel</strong>
            <Link to="/">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
