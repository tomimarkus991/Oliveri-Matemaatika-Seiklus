import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import AnimatedNumber from 'react-animated-numbers';
import { HomeContext } from '../../context/homeContext';

const Result: React.FC = () => {
  const { score, isCorrect, level } = useContext(HomeContext);

  return (
    <Flex
      mb={6}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <HStack spacing="24px" alignItems="center">
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
  );
};
export default Result;
