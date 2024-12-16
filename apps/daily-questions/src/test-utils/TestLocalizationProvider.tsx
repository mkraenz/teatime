import React, { FC, PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createI18n } from '../localization/myi18n';

const i18n = createI18n(null, 'cimode'); // THIS NEEDS TO BE DETACHED FROM REACT!
const TestLocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TestLocalizationProvider;
