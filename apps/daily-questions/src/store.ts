import { configureStore } from '@reduxjs/toolkit';
// import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import type { PersistConfig } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import accessibilityReducer, {
  AccessibilityState,
} from './accessibility/accessibility.slice';
import dailiesReducer, { DailiesState } from './dailies/dailies.slice';
import historyReducer, { HistoryState } from './history/history.slice';
import unpersistedHistoryReducer, {
  UnpersistedHistoryState,
} from './history/unpersisted-history.slice';
import questionsReducer, { QuestionsState } from './questions/questions.slice';
import settingsReducer, { SettingsState } from './settings/settings.slice';

const persistConfig: PersistConfig<{
  history: HistoryState;
  settings: SettingsState;
  questions: QuestionsState;
  dailies: DailiesState;
  accessibility: AccessibilityState;
  unpersistedHistory: UnpersistedHistoryState;
}> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['history', 'settings', 'questions', 'accessibility'],
};
export const rootReducer = combineReducers({
  history: historyReducer,
  settings: settingsReducer,
  questions: questionsReducer,
  dailies: dailiesReducer,
  accessibility: accessibilityReducer,
  unpersistedHistory: unpersistedHistoryReducer,
});

/**
 * Logs all actions and states after they are dispatched.
 */
const _logger =
  (store: any) =>
  (next: any) =>
  (action: any): any => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  };

export const setupStore = (
  reducer = persistReducer(persistConfig, rootReducer),
  preloadedState?: Partial<RootState>
) => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    // }).concat(logger), // For dev: enable as necessary
    // @ts-expect-error -- following https://redux.js.org/usage/writing-tests
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];