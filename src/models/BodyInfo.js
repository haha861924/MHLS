import dayjs from "dayjs";
import { Activity, Gender, Pregnancy } from "./Information";

export const BodyInfo = {
  gender: Gender[0].title,
  birth: dayjs().subtract(3, "years").format("YYYY-MM-DD"),
  height: "",
  weight: "",
  bodyFat: "",
  waistLine: "",
  activity: Activity[0].title,
  pregnancy: Pregnancy[0].title,
};
