import { InputField } from './InputStyle';

const Input = ({ value, type, name, required, onChange }) => {
  return (
    <label>
      {name}
      <InputField
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        required={required}
      />
    </label>
  );
};

export default Input;
