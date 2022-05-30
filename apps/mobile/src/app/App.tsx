import React, { useRef } from 'react';
import { StatusBar } from 'react-native';

import { ScrollView, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InterfaceScrollViewProps } from 'native-base/lib/typescript/components/basic/ScrollView/types';

import {
  AnalyticsChart,
  LocationList,
  Tabs,
} from '@react-native-nx-monorepo/shared-ui';
import getMonth from 'date-fns/getMonth';

export const App = () => {
  const scrollViewRef = useRef<null | InterfaceScrollViewProps>(null);

  const currentMonth = getMonth(new Date());
  const DUMMY_DATA = [
    { x: new Date(2022, currentMonth, 1), y: 19 },
    { x: new Date(2022, currentMonth, 6), y: 229 },
    { x: new Date(2022, currentMonth, 11), y: 567 },
    { x: new Date(2022, currentMonth, 16), y: 843 },
    { x: new Date(2022, currentMonth, 21), y: 1294 },
    { x: new Date(2022, currentMonth, 26), y: 1354 },
    { x: new Date(2022, currentMonth, 31), y: 1749 },
  ];

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            ref={(ref) => {
              scrollViewRef.current = ref;
            }}
            contentInsetAdjustmentBehavior="automatic"
            backgroundColor="gray.100"
          >
            <Tabs />
            <AnalyticsChart data={DUMMY_DATA} />
            <LocationList />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};
