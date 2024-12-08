import { render } from '@testing-library/react-native';
import Switch from './Switch';

describe('Switch', () => {
  it('should render successfully', () => {
    const { root } = render(<Switch />);
    expect(root).toBeTruthy();
  });
});
