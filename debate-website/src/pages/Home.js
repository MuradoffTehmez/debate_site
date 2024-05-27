// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link component
import homeImage from '../assets/homeImage.jpg'; // Ensure you have an image in this path

const HomeWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  background: url(${homeImage}) no-repeat center center/cover;
  color: #fff;
  height: 100vh;
`;

const HomeContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  display: inline-block;
  max-width: 800px;
  margin: auto;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <h1>Xoş gəlmisiniz!</h1>
        <p>Debat saytına xoş gəlmisiniz. Müxtəlif mövzularda müzakirələrə qoşulun və fikirlərinizi paylaşın.</p>
        <Link to="/debates" className="btn">Müzakirələrə Başla</Link>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
