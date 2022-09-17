import { Label, TextInput } from "flowbite-react";
import SelectOptions from "../Home/SelectOptions";

const Select = ({ htmlFor, data, onChange, disabled }) => {
  return (
    <SelectOptions
      id={htmlFor}
      data={data}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

const TextFiled = ({ htmlFor, type }) => {
  return <TextInput type={type} id={htmlFor} name={htmlFor} />;
};

export default function InputField({
  select = false,
  htmlFor,
  label,
  onChange,
  data,
  type = "text",
  disabled = false,
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
        />
      ) : (
        <TextFiled htmlFor={htmlFor} type={type} />
      )}
    </div>
  );
}
