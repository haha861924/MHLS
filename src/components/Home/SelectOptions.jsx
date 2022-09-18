import { Select } from "flowbite-react";

export default function SelectOptions({
  onChange,
  data,
  value,
  required = true,
  disabled = false,
}) {
  return (
    <Select
      required={required}
      onChange={onChange}
      disabled={disabled}
      value={value}
    >
      {data.map(({ title }) => (
        <option key={title}>{title}</option>
      ))}
    </Select>
  );
}
