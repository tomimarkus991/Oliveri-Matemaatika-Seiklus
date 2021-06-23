import { Box, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import AnimatedNumber from 'react-animated-numbers';
import { HomeContext } from '../../context/homeContext';

const Result: React.FC = () => {
  const { score, isCorrect, level } = useContext(HomeContext);

  return (
    <Flex
      mb={6}
      flexDirection="column"
      textAlign="center"
      alignItems="center"
    >
      <Text>Level</Text>
      <AnimatedNumber
        fontStyle={{
          fontSize: 40,
          fontWeight: 'bold',
        }}
        animateToNumber={level}
        animationType={'random'}
      />
      <Text>Score</Text>
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
    </Flex>
  );
};
export default Result;
