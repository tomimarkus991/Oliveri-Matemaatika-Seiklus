import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import HomeDetailsProvider from './context/homeContext';

const App = () => {
  return (
    <Box>
      <Navbar />
      <HomeDetailsProvider>
        <Home />
      </HomeDetailsProvider>
    </Box>
  );
};

export default App;
