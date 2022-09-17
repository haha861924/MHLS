import { Label, TextInput } from "flowbite-react";
import SelectOptions from "../Home/SelectOptions";

const Select = ({ htmlFor, data, onChange }) => {
  return <SelectOptions id={htmlFor} data={data} onChange={onChange} />;
};

const TextFiled = ({ htmlFor }) => {
  return <TextInput type="text" id={htmlFor} name={htmlFor} />;
};

export default function InputField({
  select = false,
  htmlFor,
  label,
  onChange,
  data,
}) {
  return (
    <div className="grid">
      <Label htmlFor={htmlFor} value={label} />
      {select ? (
        <Select htmlFor={htmlFor} data={data} onChange={onChange} />
      ) : (
        <TextFiled htmlFor={htmlFor} />
      )}
    </div>
  );
}
