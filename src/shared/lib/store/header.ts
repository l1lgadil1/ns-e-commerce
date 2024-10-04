import { create } from "zustand";

interface IHeaderStore {
    isHeaderChangeColor: boolean;
    changeHeaderColor: () => void;
    resetHeaderColor: () => void;
    isHideHeader: boolean;
    hideHeader: () => void;
    resetHideHeader: () => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isHeaderChangeColor: false,
  changeHeaderColor: () => set(() => ({ isHeaderChangeColor: true })),
  resetHeaderColor: () => set(() => ({ isHeaderChangeColor: false })),
  isHideHeader: false,
  hideHeader: () => set(() => ({ isHideHeader: true })),
  resetHideHeader: () => set(() => ({ isHideHeader: false }))
}));
