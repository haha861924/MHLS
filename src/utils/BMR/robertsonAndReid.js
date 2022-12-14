import dayjs from "dayjs";
import Decimal from "decimal.js";
import { RobertsonReidParameters } from "./parameters";

// =iferror(
//     round(0.007184 * (height ^ 0.725) * (weight ^ 0.425) * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 2, 5), false), 0)
//     round(0.007184 * height ^ 0.725 * weight ^ 0.425 * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 3, 6), false), 0)
//     round(0.007184 * height ^ 0.725 * weight ^ 0.425 * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 4, 7), false), 0)
//     "無法計算"
// )

// enum Estimate {
//   Low = 'Low',
//   Mean = 'Mean',
//   High = 'High',
// }

// const fn = (estimate: Estimate) => (bodyInfo: BodyInfo) => {
//   const { birth, height, weight, gender } = bodyInfo;

//   const isMale = gender === Gender.Male;

//   const age = new Decimal(yearfrac(birth, new Date())).ceil();
//   const maxAge = isMale ? 80 : 75;

//   if (age.lessThan(3) || age.greaterThan(maxAge)) {
//     return `僅支援3歲至${maxAge}歲之年齡`;
//   }

//   const index = age.minus(3).toNumber();

//   const base = new Decimal(0.007184)
//     .times(new Decimal(height).toPower(0.725))
//     .times(new Decimal(weight).toPower(0.425))
//     .times(24);

//   const key: keyof typeof RobertsonReidParameters = isMale
//     ? `Male_${estimate}`
//     : `Female_${estimate}`;

//   const parameter = RobertsonReidParameters[key][index];

//   return base.times(parameter).round().toString();
// };

const fn = (estimate, { birth, height, weight, gender }) => {
  const isMale = gender === "男性";

  const age = new Decimal(dayjs().year() - dayjs(birth).year()).ceil();
  const maxAge = isMale ? 80 : 75;

  if (age.lessThan(3) || age.greaterThan(maxAge)) {
    return `僅支援3歲至${maxAge}歲之年齡`;
  }
  const index = age.minus(3).toNumber();

  const base = new Decimal(0.007184)
    .times(new Decimal(height).toPower(0.725))
    .times(new Decimal(weight).toPower(0.425))
    .times(24);

  const key =
    Object.keys(RobertsonReidParameters) === isMale
      ? `Male_${estimate}`
      : `Female_${estimate}`;

  const parameter = RobertsonReidParameters[key][index];

  return base.times(parameter).round().toString();
};

export const calcRobertsonAndReidLow = (data) => fn("Low", data);
export const calcRobertsonAndReidMean = (data) => fn("Mean", data);
export const calcRobertsonAndReidHigh = (data) => fn("High", data);
