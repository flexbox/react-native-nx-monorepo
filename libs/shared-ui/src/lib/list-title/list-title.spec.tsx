import React from 'react';
import { render } from '@testing-library/react-native';

import ListTitle from './list-title';

describe('ListTitle', () => {
  it('should render successfully', () => {
    const { container } = render(<ListTitle />);
    expect(container).toBeTruthy();
  });
});
