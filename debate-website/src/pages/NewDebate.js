// src/pages/NewDebate.js
import React, { useState } from 'react';
import styled from 'styled-components';
import RequireAuth from '../components/RequireAuth';

const NewDebateWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const NewDebate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('New Debate Submitted:', { title, description, content });
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <RequireAuth>
      <NewDebateWrapper>
        <h2>Yeni Müzakirə Başlat</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Mövzu</Label>
            <Input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label>Təsvir</Label>
            <Input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </FormGroup>
          <FormGroup>
            <Label>Məzmun</Label>
            <TextArea 
              rows="6" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
            />
          </FormGroup>
          <Button type="submit">Müzakirə Başlat</Button>
        </form>
      </NewDebateWrapper>
    </RequireAuth>
  );
};

export default NewDebate;
