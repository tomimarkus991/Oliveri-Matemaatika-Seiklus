import {
  Box,
  HStack,
  Heading,
  Input as ChakraInput,
  // calc,
  Flex,
} from '@chakra-ui/react';
import { evaluate } from 'mathjs';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HomeContext } from '../../context/homeContext';
import { GetRandomAddNumber } from '../../utils/RandomNumber';

const Input: React.FC = () => {
  const [value, setValue] = useState('');
  const [randomOperator, setRandomOperator] = useState(0);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const {
    firstNumber,
    operators,
    secondNumber,
    minNumber,
    maxNumber,
    setFirstNumber,
    setSecondNumber,
    setScore,
    score,
    setIsCorrect,
    setOperators,
  } = useContext(HomeContext);

  useEffect(() => {
    if (operators[randomOperator] === '-') {
      let first = GetRandomAddNumber(minNumber, maxNumber);
      let second = GetRandomAddNumber(minNumber, maxNumber);
      if (first < second) {
        setFirstNumber(second);
        setSecondNumber(first);
      } else {
        setFirstNumber(first);
        setSecondNumber(second);
      }
    } else if (operators[randomOperator] === '+') {
      setFirstNumber(GetRandomAddNumber(minNumber, maxNumber));
      setSecondNumber(GetRandomAddNumber(minNumber, maxNumber));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomOperator, setRandomOperator]);

  useEffect(() => {
    if (operators.length === 0) {
      setIsInputDisabled(true);
    } else {
      setIsInputDisabled(false);
    }
  }, [operators, setOperators]);

  const calculate = (e: any) => {
    e.preventDefault();
    let rndNumber = Math.round(Math.random());
    if (operators.length === 1) {
      rndNumber = 0;
    }
    setRandomOperator(rndNumber);
    if (randomOperator === rndNumber) {
      let first = GetRandomAddNumber(minNumber, maxNumber);
      let second = GetRandomAddNumber(minNumber, maxNumber);
      if (operators[randomOperator] === '-') {
        if (first < second) {
          setFirstNumber(second);
          setSecondNumber(first);
        } else {
          setFirstNumber(first);
          setSecondNumber(second);
        }
      } else if (operators[randomOperator] === '+') {
        setFirstNumber(first);
        setSecondNumber(second);
      }
    }

    // when the two numbers equal to user input value. then correct
    if (
      evaluate(
        `${firstNumber} ${operators[randomOperator]} ${secondNumber}`,
      ) === parseInt(value)
    ) {
      setScore(score + 5);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setScore(score - 5);
    }
    e.target.reset();
  };
  const { t } = useTranslation();
  return (
    <Box>
      <HStack justifyContent="center" mb={10}>
        <Box>
          <Heading isTruncated>{firstNumber}</Heading>
        </Box>
        <Box>
          {operators.length === 0 ? (
            <Heading isTruncated>?</Heading>
          ) : (
            <Heading isTruncated>{operators[randomOperator]}</Heading>
          )}
        </Box>
        <Box>
          <Heading isTruncated>{secondNumber}</Heading>
        </Box>
      </HStack>
      <Flex justifyContent="center">
        <form onSubmit={calculate}>
          <ChakraInput
            placeholder={t('Number')}
            type="number"
            onChange={e => setValue(e.target.value)}
            isDisabled={isInputDisabled}
          />
        </form>
      </Flex>
    </Box>
  );
};
export default Input;
