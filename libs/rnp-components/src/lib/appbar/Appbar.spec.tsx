import { render } from '@testing-library/react-native';
import { PaperProvider } from 'react-native-paper';
import Appbar from './Appbar';

describe('Appbar', () => {
  it('should render successfully', () => {
    const { root } = render(
      <PaperProvider>
        <Appbar>
          <Appbar.Header>
            <Appbar.Action icon="menu" />
            <Appbar.Content title={'some content'} />
          </Appbar.Header>
        </Appbar>
      </PaperProvider>
    );
    expect(root).toBeTruthy();
  });
});
