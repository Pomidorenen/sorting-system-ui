import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { type ThemeName, themes } from '@utils/const';

type ThemeOption = ThemeName | 'custom';

interface ThemeStoreState {
  currentTheme: ThemeOption;
  customThemeVars: Record<string, string> | null; 
}

interface ThemeStoreAction {
  setTheme: (theme: ThemeOption) => void;
  setCustomTheme: (vars: Record<string, string>) => void; 
  resetCustomTheme: () => void; 
}

interface ThemeStore extends ThemeStoreState, ThemeStoreAction {}

const applyThemeVars = (vars: Record<string, string>) => {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};

const applyTheme = (theme: ThemeOption, customVars: Record<string, string> | null) => {
  if (theme === 'custom' && customVars) {
    applyThemeVars(customVars);
  } else if (theme !== 'custom' && themes[theme]) {
    applyThemeVars(themes[theme]);
  }
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      currentTheme: 'white',
      customThemeVars: null,
      setTheme: (theme: ThemeOption) => {
        const { customThemeVars } = get();
        applyTheme(theme, customThemeVars);
        set({ currentTheme: theme });
      },
      setCustomTheme: (vars: Record<string, string>) => {
        set({ customThemeVars: vars });
        const { currentTheme } = get();
        if (currentTheme === 'custom') {
          applyThemeVars(vars);
        }
      },
      resetCustomTheme: () => {
        set({ customThemeVars: null });
        const { currentTheme } = get();
        if (currentTheme === 'custom') {
          applyTheme('white', null);
          set({ currentTheme: 'white' });
        }
      },
    }),
    {
      name: 'app-theme-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.currentTheme, state.customThemeVars);
        }
      },
    }
  )
);


export type { ThemeOption };
export default useThemeStore;