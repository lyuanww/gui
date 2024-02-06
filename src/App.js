import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
     <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
