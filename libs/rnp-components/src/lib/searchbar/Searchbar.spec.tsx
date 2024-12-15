import { render } from '@testing-library/react-native';

import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('should render successfully', () => {
    const { root } = render(<Searchbar value="hi" />);
    expect(root).toBeVisible();
  });
});
