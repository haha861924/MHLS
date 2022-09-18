import { Label, TextInput } from "flowbite-react";
import SelectOptions from "../Home/SelectOptions";

const Select = ({ htmlFor, data, onChange, disabled, value }) => {
  return (
    <SelectOptions
      id={htmlFor}
      data={data}
      onChange={onChange}
      disabled={disabled}
      value={value}
    />
  );
};

const TextFiled = ({ htmlFor, type, value, onChange }) => {
  return (
    <TextInput
      type={type}
      id={htmlFor}
      name={htmlFor}
      value={value}
      onChange={onChange}
    />
  );
};

export default function InputField({
  select = false,
  htmlFor,
  label,
  onChange,
  data,
  type = "text",
  disabled = false,
  value,
}) {
  return (
    <div className="grid w-full">
      <Label htmlFor={htmlFor} value={label} />
      {select ? (
        <Select
          htmlFor={htmlFor}
          data={data}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      ) : (
        <TextFiled
          htmlFor={htmlFor}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
