import { render } from '@testing-library/react-native';
import { Title } from './Title';

describe('Title', () => {
  it('should render successfully', () => {
    const { root, getByRole } = render(<Title>Hi there</Title>);
    expect(root).toBeVisible();
    expect(getByRole('heading'));
  });
});
