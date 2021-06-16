import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import HomeDetailsProvider from './context/homeContext';
import Settings from './components/Settings';

const App = () => {
  return (
    <Box>
      <Navbar />
      <HomeDetailsProvider>
        <Home />
        <Settings />
      </HomeDetailsProvider>
    </Box>
  );
};

export default App;
