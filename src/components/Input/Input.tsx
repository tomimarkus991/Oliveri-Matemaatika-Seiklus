import {
  Box,
  NumberInput,
  Flex,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  calc,
  Text,
  Heading,
  Input as ChakraInput,
} from '@chakra-ui/react';
import { evaluate } from 'mathjs';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../context/homeContext';
import { GetRandomNumber } from '../../utils/RandomNumber';

const Input: React.FC = () => {
  const [value, setValue] = useState('');
  const {
    firstNumber,
    operator,
    secondNumber,
    minNumber,
    maxNumber,
    setFirstNumber,
    setSecondNumber,
  } = useContext(HomeContext);

  const calculate = (e: any) => {
    e.preventDefault();
    setFirstNumber(GetRandomNumber(minNumber, maxNumber));
    setSecondNumber(GetRandomNumber(minNumber, maxNumber));
    if (evaluate(`${firstNumber} + ${secondNumber}`) === parseInt(value)) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
    e.target.reset();
  };
  return (
    <Box>
      <HStack justifyContent="center" mb={10}>
        <Box>
          <Heading isTruncated>{firstNumber}</Heading>
        </Box>
        <Box>
          <Heading isTruncated>{operator}</Heading>
        </Box>
        <Box>
          <Heading isTruncated>{secondNumber}</Heading>
        </Box>
      </HStack>
      <form onSubmit={calculate}>
        <ChakraInput
          placeholder="Number"
          type="number"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </Box>
  );
};
export default Input;
