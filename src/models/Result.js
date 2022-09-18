import { calcBMI, calcWHtR } from "../utils/BodyMass";
import {
  calcKatchMcArdle,
  calcMifflinStJeor,
  calcOxfordEquation,
  calcRevisedHarrisBenedict,
  calcRobertsonAndReidHigh,
  calcRobertsonAndReidLow,
  calcRobertsonAndReidMean,
} from "../utils/BMR";
import { calcFAO, calcRedman } from "../utils/TDEE";
import {
  calcDubois,
  calcDuboisCorrected,
  calcYu,
  calcMosteller,
  calcHaycock,
} from "../utils/BSA";
import { calcDailyCalories } from "../utils/Calories";

export const dailyCalories = {
  title: "每日熱量攝取建議",
  info: "根據活動量及最低 BMR 計算",
  fn: (data) => calcDailyCalories(data),
};

export const BMI = {
  title: "BMI",
  fn: (data) => calcBMI(data),
};

export const WHtR = {
  title: "腰圍身高比",
  info: "<0.5 無風險; >= 0.6 高風險",
  fn: (data) => calcWHtR(data),
};

export const BMR = [
  {
    title: "Roberson and Reid(Mean)",
    info: "適用於肥胖者",
    fn: (data) => calcRobertsonAndReidMean(data),
  },
  {
    title: "Roberson and Reid(Low)",
    info: "適用於肥胖者",
    fn: (data) => calcRobertsonAndReidLow(data),
  },
  {
    title: "Roberson and Reid(Heigh)",
    info: "適用於肥胖者",
    fn: (data) => calcRobertsonAndReidHigh(data),
  },
  {
    title: "Revised Harris-Benedict",
    fn: (data) => calcRevisedHarrisBenedict(data),
  },
  {
    title: "Mifflin-St Jeor",
    fn: (data) => calcMifflinStJeor(data),
  },
  {
    title: "Katch-McArdle",
    info: "計算包含體脂",
    fn: (data) => calcKatchMcArdle(data),
  },
  {
    title: "Oxford Equation",
    info: "僅支援18歲至80歲之年齡",
    fn: (data) => calcOxfordEquation(data),
  },
];

export const BSA = [
  {
    title: "Dubois",
    info: "肥胖者會低估3-5%",
    fn: (data) => calcDubois(data),
  },
  {
    title: "Dubois, Corrected",
    info: "校正肥胖不準確",
    fn: (data) => calcDuboisCorrected(data),
  },
  {
    title: "Yu, 2013",
    info: "研究來自台灣工人",
    fn: (data) => calcYu(data),
  },
  {
    title: "Haycock, 1978",
    info: "可適用BSA 0.2-2.0(嬰兒適用)",
    fn: (data) => calcHaycock(data),
  },
  {
    title: "Mosteller, 1987",
    fn: (data) => calcMosteller(data),
  },
];

export const TDEE = [
  {
    title: "FAO, 1957",
    info: "來自FAO的營養研究",
    fn: (data) => calcFAO(data),
  },
  {
    title: "Redman",
    info: "來自雙標水研究",
    fn: (data) => calcRedman(data),
  },
];
