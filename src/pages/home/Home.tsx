import { Box, Flex } from '@chakra-ui/react';
import Input from '../../components/input';
import Result from '../../components/result';
import Settings from '../../components/settings';

const Home: React.FC = () => {
  return (
    <Box maxW={1200} m="auto" mt={{ sm: 10, md: 100 }} pb={5}>
      <Flex flexDirection="column" justifyContent="center">
        <Result />
        <Input />
        <Settings />
      </Flex>
    </Box>
  );
};

export default Home;
