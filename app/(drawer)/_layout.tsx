import {
    DarkTheme as NavigationDarkTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';

import colors from '@/theme/colors';

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: colors.background,
    card: colors.card,
    primary: colors.primary,
    text: colors.text,
    border: colors.border,
    notification: colors.accent,
  },
};

export default function DrawerLayout() {
  return (
    <ThemeProvider value={CustomDarkTheme}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: colors.background,
          },
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: 'white',
        }}
      />
    </ThemeProvider>
  );
}