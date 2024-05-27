// src/pages/UserProfile.js
import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const ProfileWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProfileContent = styled.div`
  text-align: center;
`;

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <ProfileWrapper>
      <ProfileContent>
        <h2>Profil</h2>
        <p>Email: {user ? user.email : 'Email not available'}</p>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default UserProfile;
