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
} from '@chakra-ui/react';
import { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';
const Settings: React.FC = () => {
  const {
    minNumber,
    maxNumber,
    setMinNumber,
    setMaxNumber,
    setOperators,
  } = useContext(HomeContext);
  return (
    <Box mt={20}>
      <Box maxW={400} m="auto">
        <Heading mb={5} textAlign="center">
          Settings
        </Heading>
        <form>
          <Box mb={4}>
            <Text mb="5px">Min Number</Text>
            <NumberInput
              defaultValue={minNumber}
              max={maxNumber - 1}
              onChange={value => setMinNumber(parseInt(value))}
            >
              <NumberInputField placeholder="Minimum Number" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box mb={4}>
            <Text mb="5px">Max Number</Text>
            <NumberInput
              defaultValue={maxNumber}
              min={minNumber + 1}
              onChange={value => setMaxNumber(parseInt(value))}
            >
              <NumberInputField placeholder="Maximum Number" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Flex align="center" flexDirection="column">
            <Text mb="8px">Operations</Text>
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
          </Flex>
        </form>
      </Box>
    </Box>
  );
};
export default Settings;
