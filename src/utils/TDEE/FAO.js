import Decimal from "decimal.js";

function FAOMale(weight) {
  return new Decimal(weight).toPower(0.73).times(152).round();
}
function FAOFemale(weight) {
  return new Decimal(weight).toPower(0.73).times(123).round();
}
// =round(if(gender="男",152*weight^0.73,123*weight^0.73),0)
// function fn(bodyInfo: BodyInfo) {
//   const { gender, weight } = bodyInfo;
//   if (gender === Gender.Male) {
//     return FAOMale(weight).toString();
//   }

//   return FAOFemale(weight).toString();
// }

export const calcFAO = ({ gender, weight }) => {
  if (gender === "男性") {
    return FAOMale(weight).toString();
  }
  return FAOFemale(weight).toString();
};
