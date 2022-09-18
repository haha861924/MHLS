import Decimal from "decimal.js";

/**
 * BMI
 *
 * BMI = weight / (height * height)
 *
 * @returns
 */

export const calcBMI = ({ height, weight }) =>
  new Decimal(weight).div(new Decimal(height).div(100).pow(2)).toFixed(1);
