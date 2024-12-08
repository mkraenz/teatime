import { render } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
import Text from '../text/Text';
import Portal from './Portal';

describe('Portal', () => {
  it('should render successfully', () => {
    const { root } = render(
      <PaperProvider>
        <Portal>
          <Text>Hi</Text>
        </Portal>
      </PaperProvider>
    );
    expect(root).toBeTruthy();
  });
});
