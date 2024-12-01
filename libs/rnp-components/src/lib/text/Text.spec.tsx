import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './Text';

describe('Text', () => {
  it('should render successfully', () => {
    const { root } = render(<Text />);
    expect(root).toBeTruthy();
  });
});
