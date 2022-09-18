import dayjs from "dayjs";
import Decimal from "decimal.js";
import { oxfordParameters } from "./parameters";

// =iferror(round(if(C3="男",vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:H,8,false)+vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:I,9,false)*C5,vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:J,10,false)+vlookup(roundup(yearfrac(C2,today()),0),'參數'!A:K,11,false)*C5),0),"")
// const fn = (bodyInfo: BodyInfo) => {
//   const { weight, gender, birth } = bodyInfo;

//   const age = new Decimal(yearfrac(birth, new Date())).round();

//   if (age.lessThan(18) || age.greaterThan(80)) {
//     return "僅支援18歲至80歲之年齡";
//   }

//   const index = age.minus(3).toNumber();

//   if (gender === Gender.Male) {
//     return new Decimal(oxfordParameters.Oxford_Man_A[index])
//       .add(new Decimal(oxfordParameters.Oxford_Man_B[index]).times(weight))
//       .round()
//       .toString();
//   }
//   return new Decimal(oxfordParameters.Oxford_Woman_A[index])
//     .add(new Decimal(oxfordParameters.Oxford_Woman_B[index]).times(weight))
//     .round()
//     .toString();
// };

export const calcOxfordEquation = ({ weight, gender, birth }) => {
  const age = new Decimal(dayjs().year() - dayjs(birth).year());
  if (age.lessThan(18) || age.greaterThan(80)) {
    return "僅支援18歲至80歲之年齡";
  }
  const index = age.minus(3).toNumber();
  if (gender === "男性") {
    return new Decimal(oxfordParameters.Oxford_Man_A[index])
      .add(new Decimal(oxfordParameters.Oxford_Man_B[index]).times(weight))
      .round()
      .toString();
  }
  return new Decimal(oxfordParameters.Oxford_Woman_A[index])
    .add(new Decimal(oxfordParameters.Oxford_Woman_B[index]).times(weight))
    .round()
    .toString();
};
