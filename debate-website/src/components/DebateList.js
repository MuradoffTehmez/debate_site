// src/components/DebateList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import styled from 'styled-components';
import debateImage1 from '../assets/debateImage1.jpg'; // Ensure you have images in this path
import debateImage2 from '../assets/debateImage2.jpg';

const DebateListWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const DebateItem = styled.div`
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const DebateImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 1rem;
`;

const DebateContent = styled.div`
  flex: 1;
`;

const DebateList = () => {
  // Sample data
  const debates = [
    { id: 1, title: 'İqlim dəyişikliyi haqqında müzakirə', description: 'İqlim dəyişikliyi mövzusu ətrafında müzakirələr.', image: debateImage1 },
    { id: 2, title: 'Süni intellektin gələcəyi', description: 'Süni intellekt və onun potensial təsirləri.', image: debateImage2 }
  ];

  return (
    <DebateListWrapper>
      {debates.map(debate => (
        <DebateItem key={debate.id}>
          <DebateImage src={debate.image} alt={debate.title} />
          <DebateContent>
            <h3><Link to={`/debate/${debate.id}`}>{debate.title}</Link></h3>
            <p>{debate.description}</p>
          </DebateContent>
        </DebateItem>
      ))}
    </DebateListWrapper>
  );
};

export default DebateList;
