import { createContext, useState } from 'react';
import { GetRandomNumber } from '../../utils/RandomNumber';

interface HomeContextType {
  minNumber: number;
  maxNumber: number;
  firstNumber: number;
  secondNumber: number;
  operator: string;
  setMinNumber: React.Dispatch<React.SetStateAction<number>>;
  setMaxNumber: React.Dispatch<React.SetStateAction<number>>;
  setFirstNumber: React.Dispatch<React.SetStateAction<number>>;
  setSecondNumber: React.Dispatch<React.SetStateAction<number>>;
  setOperator: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  level: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const initHomeContext: HomeContextType = {
  minNumber: 2,
  maxNumber: 20,
  firstNumber: 6,
  secondNumber: 10,
  operator: '+',
  setMinNumber: () => undefined,
  setMaxNumber: () => undefined,
  setFirstNumber: () => undefined,
  setSecondNumber: () => undefined,
  setOperator: () => undefined,
  score: 0,
  level: 0,
  setScore: () => undefined,
  setLevel: () => undefined,
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);

const HomeDetailsProvider = (props: any) => {
  // this state will be shared with all components
  const [minNumber, setMinNumber] = useState(2);
  const [maxNumber, setMaxNumber] = useState(5);
  const [firstNumber, setFirstNumber] = useState(
    GetRandomNumber(minNumber, maxNumber),
  );
  const [secondNumber, setSecondNumber] = useState(
    GetRandomNumber(minNumber, maxNumber),
  );
  const [operator, setOperator] = useState('+');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    // this is the provider providing state
    <HomeContext.Provider
      value={{
        minNumber,
        maxNumber,
        firstNumber,
        secondNumber,
        operator,
        setMinNumber,
        setMaxNumber,
        setFirstNumber,
        setSecondNumber,
        setOperator,
        score,
        level,
        setScore,
        setLevel,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeDetailsProvider;
