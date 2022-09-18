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
      {data.map(({ describe, value }) => (
        <option key={describe}>{describe}</option>
      ))}
    </Select>
  );
}
