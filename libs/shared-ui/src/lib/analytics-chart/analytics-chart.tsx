import React from 'react';
import type { VictoryDatableProps, VictoryStyleInterface } from 'victory-core';
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory-native';

export const AnalyticsChart = ({ data }: VictoryDatableProps) => {
  const style: VictoryStyleInterface = {
    data: {
      fill: 'blue',
      stroke: 'red',
      strokeWidth: 4,
    },
  };

  return (
    <VictoryChart animate={{ duration: 350 }} theme={VictoryTheme.material}>
      <VictoryArea data={data} style={style} />
    </VictoryChart>
  );
};
