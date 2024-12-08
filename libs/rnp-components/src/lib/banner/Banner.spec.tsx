import { render } from '@testing-library/react-native';
import Text from '../text/Text';
import Banner from './Banner';

describe('Banner', () => {
  it('should render successfully', () => {
    const { root, getByText } = render(
      <Banner visible>
        <Text>This is a banner.</Text>
      </Banner>
    );
    expect(root).toBeTruthy();
    expect(getByText('This is a banner.')).toBeTruthy();
  });
});
