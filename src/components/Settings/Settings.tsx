import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  HStack,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useCheckboxGroup,
  Flex,
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { HomeContext } from '../../context/homeContext';
const Settings: React.FC = () => {
  const {
    minNumber,
    maxNumber,
    setMinNumber,
    setMaxNumber,
    setOperators,
  } = useContext(HomeContext);
  const { t } = useTranslation();
  return (
    <Box mt={20}>
      <Box maxW={400} m="auto">
        <Heading mb={5} textAlign="center">
          {t('Settings')}
        </Heading>
        <form>
          <Box mb={4}>
            <FormControl>
              <FormLabel mb="5px">{t('Minimum Number')}</FormLabel>
              <NumberInput
                defaultValue={minNumber}
                max={maxNumber - 1}
                onChange={value => setMinNumber(parseInt(value))}
              >
                <NumberInputField placeholder={t('Minimum Number')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText>
                {t('This will set the minimum number')}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl>
              <FormLabel mb="5px">{t('Maximum Number')}</FormLabel>
              <NumberInput
                defaultValue={maxNumber}
                min={minNumber + 1}
                onChange={value => setMaxNumber(parseInt(value))}
              >
                <NumberInputField placeholder={t('Maximum Number')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormHelperText>
                {t('This will set the maximum number')}
              </FormHelperText>
            </FormControl>
          </Box>
          <FormControl>
            <Flex align="center" flexDirection="column">
              <Text mb="8px">{t('Operations')}</Text>
              <CheckboxGroup
                colorScheme="blue"
                defaultValue={['+']}
                onChange={(value: string[]) => setOperators(value)}
                size={'lg'}
              >
                <HStack spacing={8}>
                  <Checkbox value="+">
                    <Flex alignSelf="flex-start">
                      <AddIcon w={3.5} h={3.5} />
                    </Flex>
                  </Checkbox>
                  <Checkbox value="-">
                    <Flex alignSelf="flex-start">
                      <MinusIcon w={3.5} h={3.5} />
                    </Flex>
                  </Checkbox>
                </HStack>
              </CheckboxGroup>
              <FormHelperText>
                {t('Select operations you want')}
              </FormHelperText>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
export default Settings;
