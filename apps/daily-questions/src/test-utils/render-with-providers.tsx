import { render, RenderOptions } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, rootReducer, RootState, setupStore } from '../store';
import MockPaperProvider from './MockPaperProvider';
import TestLocalizationProvider from './TestLocalizationProvider';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    // @ts-expect-error -- this is for testing. wont spend time on fixing the type
    store = setupStore(rootReducer, preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({
    children,
    dark = false,
  }: PropsWithChildren<{ dark?: boolean }>) => (
    <Provider store={store}>
      <MockPaperProvider dark={dark}>
        <TestLocalizationProvider>{children}</TestLocalizationProvider>
      </MockPaperProvider>
    </Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
