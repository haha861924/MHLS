import { Select } from "flowbite-react";

export default function SelectOptions({
  onChange,
  data,
  required = true,
  disabled = false,
}) {
  return (
    <Select required={required} onChange={onChange} disabled={disabled}>
      {data.map(({ describe, value }) => (
        <option key={describe}>{describe}</option>
      ))}
    </Select>
  );
}
