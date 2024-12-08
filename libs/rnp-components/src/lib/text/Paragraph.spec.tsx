import React from 'react';
import { render } from '@testing-library/react-native';

import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('should render successfully', () => {
    const { root } = render(< Paragraph />);
    expect(root).toBeTruthy();
  });
});
