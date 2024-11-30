import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { MD2DarkTheme, MD2LightTheme } from 'react-native-paper';

export type FullTheme = typeof MD2LightTheme &
  typeof DefaultTheme & {
    colors: { appbarText: string };
  };

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
}

export const lightTheme: FullTheme = {
  ...MD2LightTheme,
  roundness: 12,
  colors: {
    ...DefaultTheme.colors,
    ...MD2LightTheme.colors,
    primary: Color.CorporateBlue,
    accent: Color.Orange,
    tooltip: Color.White,
    appbarText: Color.White,
  },
  // @ts-expect-error -- not worth fixing
  fonts: {
    ...DefaultTheme.fonts,
    ...MD2LightTheme.fonts,
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
    accent: Color.DarkerOrange,
    tooltip: Color.White,
    appbarText: Color.White,
  },
  // @ts-expect-error -- not worth fixing
  fonts: {
    ...DefaultTheme.fonts,
    ...MD2LightTheme.fonts,
  },
};

export const darkTheme: FullTheme = {
  ...DefaultTheme,
  ...MD2DarkTheme,
  roundness: 12,
  colors: {
    ...DarkTheme.colors,
    ...MD2DarkTheme.colors,
    primary: Color.LightBlue,
    accent: Color.LightOrange,
    tooltip: Color.Grey,
    appbarText: Color.White,
  },
  // @ts-expect-error -- not worth fixing
  fonts: {
    ...DarkTheme.fonts,
    ...MD2DarkTheme.fonts,
  },
};
