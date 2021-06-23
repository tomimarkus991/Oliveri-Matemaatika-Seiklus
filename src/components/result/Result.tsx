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
          fontStyle={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#38A169',
          }}
          animateToNumber={score}
          animationType={'calm'}
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
    </Box>
  );
};
export default Result;
