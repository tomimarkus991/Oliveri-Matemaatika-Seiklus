import {
  Box,
  Button,
  useColorMode,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { FaSun } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex position="sticky" top={0} zIndex={1} p={2}>
      <Flex flex={1} maxW={1200} alignItems="center" margin="auto">
        <Box mr="auto">
          <Heading>Oliveri Matemaatika Seiklus</Heading>
        </Box>
        <Box ml="auto">
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <FaSun />}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
