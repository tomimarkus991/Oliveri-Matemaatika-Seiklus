import {
  Box,
  IconButton,
  useColorMode,
  Flex,
  Heading,
  Select,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n } = useTranslation();
  return (
    <Flex position="sticky" top={0} zIndex={1} p={2}>
      <Flex
        flex={1}
        maxW={{ sm: 600, md: 800, lg: 1100 }}
        alignItems="center"
        margin="auto"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Box mr={{ base: 0, sm: 'auto' }} mb={{ base: 2, sm: 0 }}>
          <Heading fontSize={{ base: 18, sm: 22 }}>
            Oliveri Matemaatika Seiklus
          </Heading>
        </Box>
        <Flex ml={{ base: 0, sm: 'auto' }} flexDirection="row">
          <IconButton
            aria-label="Switch Themes"
            borderRadius={5}
            onClick={toggleColorMode}
            mr={4}
            icon={
              colorMode === 'light' ? (
                <FaMoon size={20} />
              ) : (
                <FaSun size={20} />
              )
            }
          />
          <Select
            cursor="pointer"
            onChange={e => i18n.changeLanguage(e.target.value)}
          >
            <option value="en" selected>
              English
            </option>
            <option value="est">Estonian</option>
            <option value="de">German</option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
