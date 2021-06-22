import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { HomeContext } from '../../context/homeContext';
import AnimatedNumber from 'react-animated-numbers';

const Result: React.FC = () => {
  const { score, isCorrect } = useContext(HomeContext);

  return (
    <Box m="auto" mb={8}>
      {isCorrect ? (
        <AnimatedNumber
          fontStyle={{ fontSize: 40, fontWeight: 'bold', color: 'green' }}
          animateToNumber={score}
          animationType={'calm'}
        />
      ) : (
        <AnimatedNumber
          fontStyle={{ fontSize: 40, fontWeight: 'bold', color: 'red' }}
          animateToNumber={score}
          animationType={'calm'}
        />
      )}
    </Box>
  );
};
export default Result;
