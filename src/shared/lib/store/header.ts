import { create } from "zustand";

interface IHeaderStore{
    isHeaderChangeColor:boolean;
    changeHeaderColor:()=>void;
    resetHeaderColor:()=>void;
}
export const useHeaderStore = create<IHeaderStore>((set) => ({
  isHeaderChangeColor: false,
  changeHeaderColor: () => set(() => ({ isHeaderChangeColor: true })),
  resetHeaderColor: () => set(() => ({ isHeaderChangeColor: false }))
}));
