import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { myi18n } from '../localization/myi18n';
import NavApp from '../nav/NavApp';
import { persistor, store } from '../store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={myi18n}>
          <NavApp />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
