import { Icon } from "../icon";
import { Tooltip } from "flowbite-react";
import SelectOptions from "../Home/SelectOptions";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import useStore from "../../store";

function SelectResult({ item, label }) {
  const [select, setSelect] = useState(item[0]);
  const onChange = ({ target }) => {
    const data = item.filter(({ title }) => title === target.value);
    setSelect(data[0]);
  };
  return (
    <div className="w-full">
      <SelectOptions value={item.title} onChange={onChange} data={item} />
      <div className="flex items-center space-x-2">
        <label className="text-xl font-black text-blue-gray">{label}</label>
        {select.info && (
          <Tooltip content={select.info} style="dark">
            <Icon.info className="w-4" />
          </Tooltip>
        )}
      </div>
      <Counter data={useStore()} fn={select.fn && select.fn} />
    </div>
  );
}

function Result({ item }) {
  return (
    <>
      <div className="flex space-x-2 items-center">
        <label className="text-xl font-black text-blue-gray">
          {item.title}
        </label>
        {item.info && (
          <Tooltip content={item.info} style="dark">
            <Icon.info className="w-4" />
          </Tooltip>
        )}
      </div>
      <Counter data={useStore()} fn={item.fn && item.fn} />
    </>
  );
}
export default function LabelName({ item, label }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(Array.isArray(item));
  }, []);

  return (
    <div>
      {show ? (
        <SelectResult item={item} label={label} />
      ) : (
        <Result item={item} />
      )}
    </div>
  );
}
