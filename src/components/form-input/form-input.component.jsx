import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions}></Input>
      {label && <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
