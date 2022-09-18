import dayjs from "dayjs";
import create from "zustand";
import { Activity, Pregnancy } from "../models/Information";

const init = {
  gender: "男性",
  birth: dayjs("1997/10/30").format("YYYY-MM-DD"),
  height: 173,
  weight: 55,
  bodyFat: 20,
  waistLine: 78,
  activity: Activity[0].title,
  pregnancy: Pregnancy[0].title,
};

const useStore = create((set) => ({
  ...init,
  setGender: (value) => set({ gender: value }),
  setBirth: (value) => set({ birth: dayjs(value).format("YYYY-MM-DD") }),
  setHeight: (value) => set({ height: Number(value) }),
  setWeight: (value) => set({ weight: Number(value) }),
  setBodyFat: (value) => set({ bodyFat: Number(value) }),
  setWaistLine: (value) => set({ waistLine: Number(value) }),
  setActivity: (value) => set({ activity: value }),
  setPregnancy: (value) => set({ pregnancy: value }),
  count: false,
  setCount: () => set(({ count }) => ({ count: !count })),
}));

export default useStore;
