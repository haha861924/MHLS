import LabelName from "../components/Result/LabelName";
import { dailyCalories, BMI, WHtR, BSA, BMR, TDEE } from "../models/Result";

export function Result() {
  return (
    <div className="">
      <div className="w-full grid grid-cols-3 place-content-center gap-1 mt-5 ">
        <LabelName item={dailyCalories} />
        <LabelName item={BMI} />
        <LabelName item={WHtR} />
      </div>
      <div className="w-full grid grid-cols-3 place-content-center gap-1 mt-5 ">
        <LabelName item={BMR} label="基礎代謝率(仟卡)" />
        <LabelName item={TDEE} label="TDEE(仟卡)" />
        <LabelName item={BSA} label="體表面積" />
      </div>
    </div>
  );
}
