import { create } from "zustand";

interface IThemeStore{
    theme:'women' | 'men',
    changeTheme:(val:'men' | 'women')=>void;
}
export const useThemeStore = create<IThemeStore>((set) => ({
  theme: 'women',
  changeTheme: (val) => set(() => ({ theme: val }))
}));
