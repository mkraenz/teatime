import { render } from '@testing-library/react-native';

import { PaperProvider } from 'react-native-paper';
import Text from '../text/Text';
import Snackbar from './Snackbar';

describe('Snackbar', () => {
  it('should render successfully', () => {
    const { root } = render(
      <PaperProvider>
        <Snackbar visible onDismiss={() => undefined}>
          <Text>Test</Text>
        </Snackbar>
      </PaperProvider>
    );
    expect(root).toBeTruthy();
  });
});
