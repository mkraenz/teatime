import { render } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
import Text from '../text/Text';
import Dialog from './Dialog';

describe('Dialog', () => {
  it('should render successfully', () => {
    const { root, getByText } = render(
      <PaperProvider>
        <Dialog visible>
          <Dialog.Title accessibilityRole="header">Beautiful day</Dialog.Title>
          <Dialog.Content>
            <Text>Hi there</Text>
          </Dialog.Content>
        </Dialog>
      </PaperProvider>
    );
    expect(root).toBeVisible();
    expect(getByText('Beautiful day')).toBeVisible();
    expect(getByText('Hi there')).toBeVisible();
  });
});
