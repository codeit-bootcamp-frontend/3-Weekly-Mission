const palette = {
  primary: '#6D6AFE',
  red: '#FF5B56',
  black: '#111322',
  white: '#FFFFFF',
  gray: '#3E3E43',
  gray100: '#373740',
  gray60: '#9FA6B2',
  gray20: '#CCD5E3',
  gray10: '#E7EFFB',
  bg: '#F0F6FF',
  'purpleblue-to-skyblue': 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)',
} as const;

export type TPalette = typeof palette;

export { palette };
