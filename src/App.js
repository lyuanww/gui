import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import './App.css';
import Profile from './pages/Profile';
import Forum from './pages/Forum'
import AdminPage from './pages/Admin/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{p:4}} >
        <Box>
              <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/adminPage" element={<AdminPage />} />
              </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
