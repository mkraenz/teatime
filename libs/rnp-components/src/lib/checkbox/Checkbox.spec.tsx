import { render } from '@testing-library/react-native';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { root } = render(<Checkbox status="checked" />);
    expect(root).toBeVisible();
  });
});
