//const them
const themes = {
  blue: {
    '--background-color': 'rgba(47, 49, 79, 1)',
    '--second-background-color': 'rgba(37, 38, 67, 1)',
    '--text-color': 'rgba(250, 253, 252, 1)',
    '--button-color': 'rgba(95, 154, 198, 1)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(var(--button-color), var(--text-color))',
    '--input-color': 'rgba(72, 73, 100, 1)',
  },
  cactus: {
    '--background-color': '#313336',
    '--second-background-color': 'rgba(35, 38, 41, 1)',
    '--text-color': 'rgba(255, 255, 255, 1)',
    '--button-color': 'rgba(134, 194, 50, 0.9804)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(var(--button-color), var(--text-color))',
    '--input-color': 'rgba(72, 73, 100, 1)',
  },
  zheltuha: {
    '--background-color': 'rgba(50, 51, 59, 1)',
    '--second-background-color': 'rgba(52, 54, 62, 1)',
    '--text-color': 'rgba(178, 180, 188, 1)',
    '--button-color': 'rgba(225, 169, 79, 1)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(var(--button-color), rgb(201, 228, 23))',
    '--input-color': 'rgba(68, 69, 76, 1)',
  },
  sunset: {
    '--background-color': 'rgba(44, 28, 33, 1)',
    '--second-background-color': 'rgba(58, 38, 43, 1)',
    '--text-color': 'rgba(255, 214, 165, 1)',
    '--button-color': 'rgba(232, 126, 87, 1)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(in srgb, var(--button-color), var(--text-color) 30%)',
    '--input-color': 'rgba(73, 51, 55, 1)',
  },
  ocean: {
    '--background-color': 'rgba(14, 32, 48, 1)',
    '--second-background-color': 'rgba(22, 45, 64, 1)',
    '--text-color': 'rgba(190, 225, 245, 1)',
    '--button-color': 'rgba(64, 164, 223, 1)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(in srgb, var(--button-color), var(--text-color) 25%)',
    '--input-color': 'rgba(36, 62, 82, 1)',
  },
  forest: {
    '--background-color': 'rgba(26, 38, 28, 1)',
    '--second-background-color': 'rgba(34, 50, 36, 1)',
    '--text-color': 'rgba(210, 230, 200, 1)',
    '--button-color': 'rgba(105, 162, 85, 1)',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(in srgb, var(--button-color), var(--text-color) 35%)',
    '--input-color': 'rgba(50, 66, 50, 1)',
  },
  white:{
    '--background-color': '#F5F5F5',
    '--second-background-color': '#D6D6D6',
    '--text-color': 'rgba(0, 0, 0, 1)',
    '--button-color': '#86C232',
    '--button-text-color': '#FFF',
    '--hover-color': 'color-mix(in srgb, var(--button-color)70%, var(--text-color) 5%)',
    '--input-color': 'rgb(191, 205, 191)'
  },
  black:{
    '--background-color': '#232629',
    '--second-background-color': '#474A4F',
    '--text-color': '#FFF',
    '--button-color': '#86C232',
    '--button-text-color': 'rgba(0, 0, 0, 1)',
    '--hover-color': 'color-mix(in srgb, var(--button-color), var(--text-color) 35%)',
    '--input-color': '#1E2021',
  }
} as const;

type ThemeName = keyof typeof themes;




export type {
  ThemeName
}
export {
  themes
}