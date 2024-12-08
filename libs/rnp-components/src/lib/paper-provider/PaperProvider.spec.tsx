import { render } from '@testing-library/react-native';
import Text from '../text/Text';
import PaperProvider from './PaperProvider';

describe('PaperProvider', () => {
  it('should render successfully', () => {
    const { root } = render(
      <PaperProvider>
        <Text>Hi</Text>
      </PaperProvider>
    );
    expect(root).toBeTruthy();
  });
});
