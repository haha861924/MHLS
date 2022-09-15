import { List } from "../models";
import { Icon } from "../components/icon";

export default function Footer() {
  return (
    <div className="flex w-fit text-blue-gray mt-10 font-black">
      {List.map((item) => (
        <div className="text-blue-gray">
          <div className="flex">
            <Icon.item className="" />
            <label className="text-white bg-blue-gray">{item.title}</label>
          </div>
          <div>
            <p>{item.describe}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
