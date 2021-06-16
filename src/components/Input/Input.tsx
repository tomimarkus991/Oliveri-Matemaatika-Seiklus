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
} from '@chakra-ui/react';
import { evaluate } from 'mathjs';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../context/homeContext';

const Input: React.FC = () => {
  const [value, setValue] = useState('');
  const {
    firstNumber,
    operator,
    secondNumber,
    maxNumber,
    setFirstNumber,
    setSecondNumber,
  } = useContext(HomeContext);

  const calculate = (e: any) => {
    e.preventDefault();
    setFirstNumber(Math.floor(Math.random() * maxNumber));
    setSecondNumber(Math.floor(Math.random() * maxNumber));

    if (evaluate(`${firstNumber} + ${secondNumber}`) === parseInt(value)) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
  };
  return (
    <Box>
      <HStack>
        <Box>{firstNumber}</Box>
        <Box>{operator}</Box>
        <Box>{secondNumber}</Box>
      </HStack>
      <form onSubmit={calculate}>
        <NumberInput onChange={value => setValue(value)}>
          <NumberInputField placeholder="Number" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </form>
    </Box>
  );
};
export default Input;
