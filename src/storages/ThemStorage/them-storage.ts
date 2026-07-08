import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {type ThemeName, themes} from "@utils/const";


// const customColor:ThemeName = {
//   ...themes["blue"] 
// };


interface ThemeStoreState{
    currentTheme: ThemeName;
}
interface ThemeStoreAction{
   setTheme: (theme: ThemeName) => void;
}

interface ThemeStore extends ThemeStoreState,ThemeStoreAction{}

const applyTheme = (themeName: ThemeName) => {
  const vars = themes[themeName];
  if (!vars) return;
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};


const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: 'ocean', 
      setTheme: (theme: ThemeName) => {
        applyTheme(theme);
        set({ currentTheme: theme });
      },
    }),
    {
      name: 'app-theme-storage', 
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.currentTheme);
        }
      },
    }
  )
);


export default useThemeStore;