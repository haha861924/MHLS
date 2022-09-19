import Decimal from "decimal.js";
import { Activity } from "../../models";
import { calcRobertsonAndReidHigh, calcRobertsonAndReidLow } from "../BMR";

import { BMR } from "../";

export const CaloriesParameters = {
  男性: {
    [Activity[0].title]: 1.3,
    [Activity[1].title]: 1.6,
    [Activity[2].title]: 1.7,
    [Activity[3].title]: 2.1,
    [Activity[4].title]: 2.4,
  },
  女性: {
    [Activity[0].title]: 1.3,
    [Activity[1].title]: 1.5,
    [Activity[2].title]: 1.6,
    [Activity[3].title]: 1.9,
    [Activity[4].title]: 2.2,
  },
};

const skipFunc = [calcRobertsonAndReidHigh, calcRobertsonAndReidLow];

//round(min(0.007184*(height*0.725)*(weight*0.425)*24*(vlookup(BMI(age, gender))*(actionvalue(actionType, gender)))
// function fn(bodyInfo: BodyInfo) {
//   const { gender, activity } = bodyInfo;
//   const ratio = CaloriesParameters[gender][activity];

//   const BMRs = Object.values(BMR)
//     .filter((func) => !skipFunc.includes(func))
//     .map((func) => func(bodyInfo));

//   const min = Math.min(...BMRs.map(Number));

//   return new Decimal(min).times(ratio).round().toString();
// }

export const calcDailyCalories = (bodyInfo) => {
  const { gender, activity } = bodyInfo;
  const ratio = CaloriesParameters[gender][activity];

  const BMRs = Object.values(BMR)
    .filter((func) => !skipFunc.includes(func))
    .map((func) => func(bodyInfo));

  const min = Math.min(...BMRs.map(Number));
  if (isNaN(min)) return "僅支援18歲至80歲之年齡";

  return new Decimal(min).times(ratio).round().toString();
};
