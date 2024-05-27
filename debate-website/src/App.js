import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DebateList from './components/DebateList';
import DebateDetail from './components/DebateDetail';
import UserProfile from './components/UserProfile';
import NewDebate from './components/NewDebate';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debates" element={<DebateList />} />
          <Route path="/debate/:id" element={<DebateDetail />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/new-debate" element={<NewDebate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
