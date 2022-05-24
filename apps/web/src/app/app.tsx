import { NativeBaseProvider } from 'native-base';
import NxWelcome from './nx-welcome';
import { LocationList, Tabs } from '@react-native-nx-monorepo/shared-ui';

export function App() {
  return (
    <NativeBaseProvider>
      <LocationList />
      <Tabs />
      <NxWelcome title="web" />
    </NativeBaseProvider>
  );
}

export default App;
