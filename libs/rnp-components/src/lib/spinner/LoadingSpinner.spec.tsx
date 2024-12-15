import { render } from '@testing-library/react-native';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render successfully', () => {
    const { root } = render(<LoadingSpinner />);
    expect(root).toBeVisible();
  });
});
