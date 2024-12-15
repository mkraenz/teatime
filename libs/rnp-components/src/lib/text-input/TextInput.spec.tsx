import { render } from '@testing-library/react-native';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render successfully', () => {
    const { root } = render(<TextInput />);
    expect(root).toBeVisible();
  });
});
