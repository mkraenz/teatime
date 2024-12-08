import { render } from '@testing-library/react-native';
import Divider from './Divider';

describe('Divider', () => {
  it('should render successfully', () => {
    const { root } = render(<Divider />);
    expect(root).toBeTruthy();
  });
});
