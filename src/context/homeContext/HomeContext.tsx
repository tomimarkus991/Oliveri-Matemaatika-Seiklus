import { createContext, useState } from 'react';
import { GetRandomAddNumber } from '../../utils/RandomNumber';

interface HomeContextType {
  minNumber: number;
  maxNumber: number;
  firstNumber: number;
  secondNumber: number;
  operators: string[];
  setMinNumber: React.Dispatch<React.SetStateAction<number>>;
  setMaxNumber: React.Dispatch<React.SetStateAction<number>>;
  setFirstNumber: React.Dispatch<React.SetStateAction<number>>;
  setSecondNumber: React.Dispatch<React.SetStateAction<number>>;
  setOperators: React.Dispatch<React.SetStateAction<string[]>>;
  score: number;
  level: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  isCorrect: boolean;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

const initHomeContext: HomeContextType = {
  minNumber: 2,
  maxNumber: 5,
  firstNumber: 1,
  secondNumber: 1,
  operators: ['+'],
  setMinNumber: () => undefined,
  setMaxNumber: () => undefined,
  setFirstNumber: () => undefined,
  setSecondNumber: () => undefined,
  setOperators: () => undefined,
  score: 0,
  level: 0,
  setScore: () => undefined,
  setLevel: () => undefined,
  isCorrect: true,
  setIsCorrect: () => undefined,
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);

const HomeDetailsProvider = (props: any) => {
  // this state will be shared with all components
  const [minNumber, setMinNumber] = useState(2);
  const [maxNumber, setMaxNumber] = useState(5);
  const [firstNumber, setFirstNumber] = useState(
    GetRandomAddNumber(minNumber, maxNumber),
  );
  const [secondNumber, setSecondNumber] = useState(
    GetRandomAddNumber(minNumber, maxNumber),
  );
  const [operators, setOperators] = useState(['+']);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <HomeContext.Provider
      value={{
        minNumber,
        maxNumber,
        firstNumber,
        secondNumber,
        operators,
        setMinNumber,
        setMaxNumber,
        setFirstNumber,
        setSecondNumber,
        setOperators,
        score,
        level,
        setScore,
        setLevel,
        isCorrect,
        setIsCorrect,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeDetailsProvider;
