import React from 'react';
import { render } from '@testing-library/react-native';

import Tabs from './tabs';

describe('Tabs', () => {
  it('should render successfully', () => {
    const { container } = render(<Tabs />);
    expect(container).toBeTruthy();
  });
});
