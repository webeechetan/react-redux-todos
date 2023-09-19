import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Home from './components/Home';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Register from './components/auth/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
