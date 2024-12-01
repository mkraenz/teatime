/** https://docs.expo.dev/versions/latest/config/metro/#bundle-splitting: In SDK 50, Expo CLI automatically splits web bundles into multiple chunks based on async imports in production. This feature requires @expo/metro-runtime to be installed and imported somewhere in the entry bundle (available by default in Expo Router). -- also necessary for hot module replacement */
import '@expo/metro-runtime';

import { registerRootComponent } from 'expo';

import App from './src/app/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
