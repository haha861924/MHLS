import { Select } from "flowbite-react";

export default function SelectOptions({ onChange, data, required = true }) {
  return (
    <Select required={required} onChange={onChange}>
      {data.map(({ describe, value }) => (
        <option key={value}>{describe}</option>
      ))}
    </Select>
  );
}
