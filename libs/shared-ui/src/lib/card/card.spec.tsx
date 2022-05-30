import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { Card } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Card>
        <Text>Hello</Text>
      </Card>
    );
    expect(container).toBeTruthy();
  });
});
