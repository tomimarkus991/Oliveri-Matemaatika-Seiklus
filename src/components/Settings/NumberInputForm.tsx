import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
interface Props {
  formLabel: string;
  formHelper: string;
  defaultValue: number;
  onChange: (value: string) => void;
  minNumber: number | undefined;
  maxNumber: number | undefined;
}
export const NumberInputForm: React.FC<Props> = ({
  formLabel,
  formHelper,
  defaultValue,
  onChange,
  minNumber,
  maxNumber,
}) => {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel mb="5px">{t(formLabel)}</FormLabel>
      <NumberInput
        defaultValue={defaultValue}
        min={minNumber}
        max={maxNumber}
        onChange={value => onChange(value)}
      >
        <NumberInputField placeholder={t(formLabel)} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>{t(formHelper)}</FormHelperText>
    </FormControl>
  );
};
