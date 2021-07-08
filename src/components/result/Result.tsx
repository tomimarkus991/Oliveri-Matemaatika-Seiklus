import {
  Flex,
  HStack,
  Progress,
  Spacer,
  Text,
  Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import AnimatedNumber from 'react-animated-numbers';
import { HomeContext } from '../../context/homeContext';

const Result: React.FC = () => {
  const { score, isCorrect, level, levelUpWhen } = useContext(HomeContext);

  return (
    <Box m="auto">
      <Progress
        colorScheme="blue"
        size="lg"
        value={(score / levelUpWhen) * 100}
        w={{ base: 300, sm: 400, md: 600 }}
        borderRadius={20}
      />
      <Flex mb={6} justifyContent="center">
        <HStack spacing="24px">
          <Text fontSize={24}>Level</Text>
          <AnimatedNumber
            fontStyle={{
              fontSize: 40,
              fontWeight: 'bold',
            }}
            animateToNumber={level}
            animationType={'random'}
          />
          <Spacer />
          <Text fontSize={24}>Score</Text>
          {isCorrect ? (
            <AnimatedNumber
              fontStyle={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#38A169',
              }}
              animateToNumber={score}
              animationType={'random'}
            />
          ) : (
            <AnimatedNumber
              fontStyle={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#E53E3E',
              }}
              animateToNumber={score}
              animationType={'random'}
            />
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
export default Result;
