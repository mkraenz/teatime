import { render } from '@testing-library/react-native';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('should render successfully', () => {
    const { root } = render(<IconButton icon={'menu'} />);
    expect(root).toBeVisible();
  });
});
