import Decimal from "decimal.js";

// BSA = 0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425)
// function fn(bodyInfo: BodyInfo) {
//   const { height, weight } = bodyInfo;
//   return new Decimal(0.007184)
//     .times(Math.pow(height, 0.725))
//     .times(Math.pow(weight, 0.425))
//     .toFixed(2);
// }

export const calcDubois = ({ height, weight }) =>
  new Decimal(0.007184)
    .times(Math.pow(height, 0.725))
    .times(Math.pow(weight, 0.425))
    .toFixed(2);
