import Decimal from "decimal.js";

/**
 * waist-to-height ratio
 *
 * formula: height / waist
 */
// function fn(bodyInfo: BodyInfo) {
//   const {
//     height,
//     lines: { waistLine },
//   } = bodyInfo;
//   if (waistLine === undefined) {
//     return "-";
//   }
//   return new Decimal(waistLine).div(height).toFixed(2);
// }

export const calcWHtR = ({ waistLine, height }) =>
  new Decimal(waistLine).div(height).toFixed(2);
