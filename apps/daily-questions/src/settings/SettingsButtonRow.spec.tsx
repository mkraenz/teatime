import { render } from '@testing-library/react-native';
import { noop } from 'lodash';
import * as React from 'react';
import SettingsButtonRow from './SettingsButtonRow';

test('renders correctly', () => {
  const { getByText, getByRole } = render(
    <SettingsButtonRow onPress={noop} title="test123" />
  );
  expect(getByText('test123')).toBeDefined();
  expect(getByRole('button')).toBeDefined();
});
