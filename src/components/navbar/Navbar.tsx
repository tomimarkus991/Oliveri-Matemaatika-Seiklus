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
      <Flex flex={1} maxW={1200} alignItems="center" margin="auto">
        <Box mr="auto">
          <Heading>Oliveri Matemaatika Seiklus</Heading>
        </Box>
        <Flex ml="auto" flexDirection="row">
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
          <Select>
            <option onClick={() => i18n.changeLanguage('en')} selected>
              English
            </option>
            <option onClick={() => i18n.changeLanguage('est')}>
              Estonian
            </option>
            <option onClick={() => i18n.changeLanguage('de')}>
              German
            </option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
