import React from 'react';

import { Link } from 'react-router-dom';

import { Container, NavItemLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  activedRoute: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  activedRoute,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            Listagem
            <NavItemLink activatedRoute={activedRoute === '/'} actualPage="/" />
          </Link>
          <Link to="/import">
            Importar
            <NavItemLink
              activatedRoute={activedRoute === '/import'}
              actualPage="/import"
            />
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
