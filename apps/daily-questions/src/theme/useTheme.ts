// eslint-disable-next-line no-restricted-imports
import { useTheme as useThemeRnp } from 'react-native-paper';
import { FullTheme } from './theme';

export const useTheme = () => useThemeRnp<FullTheme>();
