import { useState } from "react";
import useStore from "../store";
import { Icon } from "../components/icon";
import Form from "./Forms";

export default function Home() {
  const [show, setShow] = useState(true);
  const { setReset } = useStore();
  const onClick = () => {
    setShow(!show);
    setReset();
  };

  return (
    <div className="text-blue-gray-300 space-y-5 font-normal">
      <div className="text-white font-normal bg-green-gray w-fit px-1">
        <span>Source</span>:<span>王介立醫師</span>
      </div>
      <div className="flex space-x-2 text-xl font-black items-center text-blue-gray">
        <span>基礎代謝率</span>
        <Icon.fork />
        <span>TDEE</span>
        <Icon.fork />
        <span>體表面積</span>
        <Icon.fork />
        <span>計算機</span>
      </div>
      <div className="flex flex-col text-7xl font-black text-blue-gray">
        <span>BODY</span>
        <span>COMPOSITION</span>
      </div>
      <p className="w-4/6">
        只需要輸入幾項您的個人資料,
        如身高、體重...，立刻就能計算出您的健康指標。
      </p>
      <p className="py-6">感謝王介立醫師辛苦整理的健康計算公式</p>
      <button
        onClick={onClick}
        className="bg-dark-green text-white rounded-lg w-60 py-2 font-black"
      >
        開始計算
      </button>
      <Form show={show} onClick={onClick} />
    </div>
  );
}
