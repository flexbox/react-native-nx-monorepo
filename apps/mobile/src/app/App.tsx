import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { LocationList } from '../components/LocationList';

import { ScrollView, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InterfaceScrollViewProps } from 'native-base/lib/typescript/components/basic/ScrollView/types';

export const App = () => {
  const scrollViewRef = useRef<null | InterfaceScrollViewProps>(null);

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            ref={(ref) => {
              scrollViewRef.current = ref;
            }}
            contentInsetAdjustmentBehavior="automatic"
            backgroundColor="gray.100"
          >
            <LocationList />
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
