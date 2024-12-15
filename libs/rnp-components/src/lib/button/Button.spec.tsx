import { render } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { root } = render(<Button>Hello</Button>);
    expect(root).toBeVisible();
  });
});
