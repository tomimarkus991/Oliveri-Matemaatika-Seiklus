import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import AnimatedNumber from 'react-animated-numbers';
import { HomeContext } from '../../context/homeContext';

const Result: React.FC = () => {
  const { score, isCorrect } = useContext(HomeContext);

  return (
    <Box m="auto" mb={6}>
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
