import { createContext, useState } from 'react';

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
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);

const HomeDetailsProvider = (props: any) => {
  // this state will be shared with all components
  const [operator, setOperator] = useState('+');
  const [minNumber, setMinNumber] = useState(2);
  const [maxNumber, setMaxNumber] = useState(20);
  const [firstNumber, setFirstNumber] = useState(
    Math.floor(Math.random() * maxNumber),
  );
  const [secondNumber, setSecondNumber] = useState(
    Math.floor(Math.random() * maxNumber),
  );

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
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeDetailsProvider;
