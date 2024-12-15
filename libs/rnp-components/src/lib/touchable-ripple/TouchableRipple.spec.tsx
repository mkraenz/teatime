import { render } from '@testing-library/react-native';
import Text from '../text/Text';
import TouchableRipple from './TouchableRipple';

describe('TouchableRipple', () => {
  it('should render successfully', () => {
    const { root } = render(
      <TouchableRipple>
        <Text>Teatime rocks</Text>
      </TouchableRipple>
    );
    expect(root).toBeVisible();
  });
});
