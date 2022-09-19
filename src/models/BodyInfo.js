import dayjs from "dayjs";
import { Activity, Gender, Pregnancy } from "./Information";

export const BodyInfo = {
  gender: Gender[0].title,
  birth: dayjs().format("YYYY-MM-DD"),
  height: 0,
  weight: 0,
  bodyFat: 0,
  waistLine: 0,
  activity: Activity[0].title,
  pregnancy: Pregnancy[0].title,
};
