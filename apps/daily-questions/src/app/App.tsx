import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { myi18n } from '../localization/myi18n';
import NavApp from '../nav/NavApp';

export const App = () => {
  return (
    <I18nextProvider i18n={myi18n}>
      <NavApp />
    </I18nextProvider>
  );
};

export default App;
