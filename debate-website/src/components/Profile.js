// src/components/Profile.js
import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <h2>Profilim</h2>
      <p>İstifadəçi məlumatları burada göstəriləcək.</p>
      <ul>
        <li>Ad: John Doe</li>
        <li>Email: john.doe@example.com</li>
        <li>Qoşulduğu müzakirələr: 5</li>
      </ul>
    </ProfileWrapper>
  );
};

export default Profile;
