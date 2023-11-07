import { LabelFilter, InputFilter } from './FilterStyle';

const Filter = ({ text, value, onChange }) => {
  return (
    <LabelFilter>
      {text}
      <InputFilter type="text" value={value} onChange={onChange} />
    </LabelFilter>
  );
};

export default Filter;
