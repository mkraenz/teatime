import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export type FullTheme = typeof MD3LightTheme & typeof DefaultTheme;

export enum Color {
  LightBlue = '#00C0FA',
  Blue = '#0097e6',
  DarkCorporateBlue = '#004794',
  CorporateBlue = '#005EC3',
  Grey = '#272727',
  LightGrey = 'grey', // #808080
  White = 'white', // #ffffff
  DarkerOrange = '#992F00', // somewhat brown
  Orange = '#AD5A00',
  LightOrange = '#E8AF4B',
  SemitransparentWhite = 'rgba(231, 224, 236, 0.5)',
}

export const lightTheme: FullTheme = {
  ...MD3LightTheme,
  colors: {
    ...DefaultTheme.colors,
    ...MD3LightTheme.colors,
    primary: Color.CorporateBlue,
    secondary: Color.Orange,
    tertiary: Color.White,
    inversePrimary: Color.Orange,
    surfaceVariant: Color.SemitransparentWhite,
  },
  fonts: {
    ...DefaultTheme.fonts,
    ...MD3LightTheme.fonts,
  },
};

/** on white #F6F6F6 background, primary and accent colors have at least 7:1 contrast,
 * thus passing WCAG AAA
 */
export const highContrastLightTheme: FullTheme = {
  ...DefaultTheme,
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: Color.DarkCorporateBlue,
    secondary: Color.DarkerOrange,
    tertiary: Color.White,
    inversePrimary: Color.DarkerOrange,
  },
  fonts: {
    ...DefaultTheme.fonts,
    ...MD3LightTheme.fonts,
  },
};

export const darkTheme: FullTheme = {
  ...DarkTheme,
  ...MD3DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...MD3DarkTheme.colors,
    primary: Color.LightBlue,
    secondary: Color.LightOrange,
    tertiary: Color.Grey,
    inversePrimary: Color.LightOrange,
    surfaceVariant: MD3DarkTheme.colors.backdrop,
  },
  fonts: {
    ...DarkTheme.fonts,
    ...MD3DarkTheme.fonts,
  },
};
