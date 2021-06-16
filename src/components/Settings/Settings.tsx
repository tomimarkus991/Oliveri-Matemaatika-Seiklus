import {
  Box,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';
const Settings: React.FC = () => {
  const { minNumber, maxNumber, setMinNumber, setMaxNumber } =
    useContext(HomeContext);

  return (
    <Box textAlign="center" mt={20}>
      <Heading mb={5}>Settings</Heading>
      <Box maxW={400} m="auto">
        <form>
          <NumberInput
            mb={4}
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
        </form>
      </Box>
    </Box>
  );
};
export default Settings;
