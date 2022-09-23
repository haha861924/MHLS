import { List } from "../models";
import { Icon } from "../components/Icon";

export function Footer() {
  return (
    <div className="flex w-fit text-blue-gray mt-10 font-black">
      {List.map((item) => (
        <div className="mr-3 relative w-56">
          <div className="flex items-center">
            <div className=" bg-white z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 p-2 border-blue-gray">
              <Icon.item />
            </div>
            <label className="absolute  ml-10 bg-blue-gray text-white rounded-r p-1 px-3">
              {item.title}
            </label>
          </div>
          <p className="ml-5 mt-5">{item.info}</p>
        </div>
      ))}
    </div>
  );
}
