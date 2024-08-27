import { create } from "zustand";

interface IThemeStore{
    theme:'women' | 'men',
    changeTheme:(val:'men' | 'women')=>void;
}
export const useThemeStore = create<IThemeStore>((set) => ({
  // theme: 'women',
  theme: 'men',
  changeTheme: (val) => set(() => ({ theme: val }))
}));
