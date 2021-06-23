import { Box, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { HomeContext } from '../../context/homeContext';
import { CheckboxForm } from './CheckboxForm';
import { NumberInputForm } from './NumberInputForm';
const Settings: React.FC = () => {
  const {
    minNumber,
    maxNumber,
    setMinNumber,
    setMaxNumber,
    setOperators,
  } = useContext(HomeContext);
  const { t } = useTranslation();
  return (
    <Box mt={20}>
      <Box maxW={250} m="auto">
        <Heading mb={5} textAlign="center">
          {t('Settings')}
        </Heading>
        <form>
          <Box mb={4}>
            <NumberInputForm
              formLabel="Minimum Number"
              formHelper="This will set the minimum number"
              defaultValue={minNumber}
              minNumber={undefined}
              maxNumber={maxNumber - 1}
              onChange={value => setMinNumber(parseInt(value))}
            />
          </Box>
          <Box mb={4}>
            <NumberInputForm
              formLabel="Maximum Number"
              formHelper="This will set the maximum number"
              defaultValue={maxNumber}
              minNumber={minNumber + 1}
              maxNumber={undefined}
              onChange={value => setMaxNumber(parseInt(value))}
            />
          </Box>
          <Box>
            <CheckboxForm setOperators={setOperators} />
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default Settings;
