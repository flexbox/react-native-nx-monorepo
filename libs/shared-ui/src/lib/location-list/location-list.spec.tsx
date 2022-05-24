import React from 'react';
import { render } from '@testing-library/react-native';

import LocationList from './location-list';

describe('LocationList', () => {
  it('should render successfully', () => {
    const { container } = render(<LocationList />);
    expect(container).toBeTruthy();
  });
});
