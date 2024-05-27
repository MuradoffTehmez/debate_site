// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HeaderWrapper = styled.header`
  background: #0073e6;
  color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #005bb5;
    border-radius: 5px;
  }
`;

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <HeaderWrapper>
      <Nav>
        <Logo>Debat Saytı</Logo>
        <NavLinks>
          <StyledLink to="/">Ana səhifə</StyledLink>
          <StyledLink to="/debates">Müzakirələr</StyledLink>
          {user ? (
            <>
              <StyledLink to="/profile">Profil</StyledLink>
              <StyledLink to="/new-debate">Yeni Müzakirə</StyledLink>
              <StyledLink to="/" onClick={logout}>Çıxış</StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Giriş</StyledLink>
              <StyledLink to="/register">Qeydiyyat</StyledLink>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
