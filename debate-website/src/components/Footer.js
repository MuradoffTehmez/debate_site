// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #0073e6;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Debat Saytı. Bütün hüquqlar qorunur.</p>
    </FooterWrapper>
  );
};

export default Footer;
