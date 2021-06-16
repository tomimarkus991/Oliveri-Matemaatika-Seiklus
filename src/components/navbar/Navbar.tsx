import { Box, Text, Button, useColorMode, Flex } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex position="sticky" top={0} zIndex={1} p={2}>
      <Flex flex={1} maxW={1200} alignItems="center" margin="auto">
        <Box mr="auto">
          <Text>Math</Text>
        </Box>
        <Box ml="auto">
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
