import Decimal from "decimal.js";

// BSA = 0.00949 * Math.pow(height, 0.655) * Math.pow(weight, 0.441)
// function fn(bodyInfo: BodyInfo) {
//   const { height, weight } = bodyInfo;
//   return new Decimal(0.00949)
//     .times(Math.pow(height, 0.655))
//     .times(Math.pow(weight, 0.441))
//     .toFixed(2);
// }

export const calcDuboisCorrected = ({ height, weight }) =>
  new Decimal(0.00949)
    .times(Math.pow(height, 0.655))
    .times(Math.pow(weight, 0.441))
    .toFixed(2);
