import React from 'react';
import { render } from '@testing-library/react-native';

import Title from './Title';

describe('Title', () => {
  it('should render successfully', () => {
    const { root } = render(< Title />);
    expect(root).toBeTruthy();
  });
});
