import dayjs from "dayjs";
import create from "zustand";
import { BodyInfo } from "../models";

const useStore = create((set) => ({
  ...BodyInfo,
  setGender: (value) => set({ gender: value }),
  setBirth: (value) => set({ birth: dayjs(value).format("YYYY-MM-DD") }),
  setHeight: (value) => set({ height: Number(value) }),
  setWeight: (value) => set({ weight: Number(value) }),
  setBodyFat: (value) => set({ bodyFat: Number(value) }),
  setWaistLine: (value) => set({ waistLine: Number(value) }),
  setActivity: (value) => set({ activity: value }),
  setPregnancy: (value) => set({ pregnancy: value }),
  count: false,
  setCount: (status) => set(({ count }) => ({ count: status })),
  setReset: () => set((state) => ({ ...state, ...BodyInfo })),
}));

export default useStore;
