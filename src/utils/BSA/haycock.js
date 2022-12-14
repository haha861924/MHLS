import Decimal from "decimal.js";

// BSA = 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378)
// function fn(bodyInfo: BodyInfo) {
//   const { height, weight } = bodyInfo;
//   return new Decimal(0.024265)
//     .times(Math.pow(height, 0.3964))
//     .times(Math.pow(weight, 0.5378))
//     .toFixed(2);
// }

export const calcHaycock = ({ height, weight }) =>
  new Decimal(0.024265)
    .times(Math.pow(height, 0.3964))
    .times(Math.pow(weight, 0.5378))
    .toFixed(2);
