import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Flex,
  CheckboxGroup,
  HStack,
  Checkbox,
  FormHelperText,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
interface Props {
  setOperators: React.Dispatch<React.SetStateAction<string[]>>;
}
export const CheckboxForm: React.FC<Props> = ({ setOperators }) => {
  const { t } = useTranslation();
  return (
    <FormControl>
      <Flex align="center" flexDirection="column">
        <Text mb="8px">{t('Operations')}</Text>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={['+']}
          onChange={(value: string[]) => setOperators(value)}
          size={'lg'}
        >
          <HStack spacing={8}>
            <Checkbox value="+">
              <Flex alignSelf="flex-start">
                <AddIcon w={3.5} h={3.5} />
              </Flex>
            </Checkbox>
            <Checkbox value="-">
              <Flex alignSelf="flex-start">
                <MinusIcon w={3.5} h={3.5} />
              </Flex>
            </Checkbox>
          </HStack>
        </CheckboxGroup>
        <FormHelperText>{t('Select operations you want')}</FormHelperText>
      </Flex>
    </FormControl>
  );
};
