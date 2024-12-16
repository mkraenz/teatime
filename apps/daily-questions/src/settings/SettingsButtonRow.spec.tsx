import { noop } from 'lodash';
import { renderWithProviders } from '../test-utils';
import SettingsButtonRow from './SettingsButtonRow';

test('renders correctly', () => {
  const { getByText, getByRole } = renderWithProviders(
    <SettingsButtonRow onPress={noop} title="test123" />
  );
  expect(getByText('test123')).toBeVisible();
  expect(getByRole('button')).toBeVisible();
});
