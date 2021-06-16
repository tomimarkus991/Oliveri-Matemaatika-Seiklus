import { Box, Flex } from '@chakra-ui/react';
import Input from '../../components/Input';

const Home: React.FC = () => {
  return (
    <Box maxW={1200} m="auto" mt={200}>
      <Flex justifyContent="center">
        <Input />
      </Flex>
    </Box>
  );
};

export default Home;
