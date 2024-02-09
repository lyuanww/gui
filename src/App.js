import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import './App.css';
import Dashboard from './pages/Dashboard';
import Forum from './pages/Forum'
import AdminPage from './pages/Admin/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxwidth="xl">
        <Box>
              <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/adminPage" element={<AdminPage />} />
              </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
