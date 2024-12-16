import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createI18n } from '../localization/myi18n';
import LocalNotifications from '../LocalNotifications';
import NavApp from '../nav/NavApp';
import { persistor, store } from '../store';
import ThemedApp from '../theme/ThemedApp';

const myI18n = createI18n();

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp>
          <I18nextProvider i18n={myI18n}>
            <LocalNotifications />
            <NavApp />
          </I18nextProvider>
        </ThemedApp>
      </PersistGate>
    </Provider>
  );
};

export default App;
