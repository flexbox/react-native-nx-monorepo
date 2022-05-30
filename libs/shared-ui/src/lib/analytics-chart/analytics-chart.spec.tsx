import React from 'react';
import { render } from '@testing-library/react-native';

import AnalyticsChart from './analytics-chart';

describe('AnalyticsChart', () => {
  it('should render successfully', () => {
    const { container } = render(<AnalyticsChart />);
    expect(container).toBeTruthy();
  });
});
