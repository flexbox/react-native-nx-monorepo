import { Button, NativeBaseProvider } from 'native-base';
import NxWelcome from './nx-welcome';
import { LocationList } from '@react-native-nx-monorepo/shared-ui';

export function App() {
  return (
    <NativeBaseProvider>
      <NxWelcome title="web" />
      <LocationList />
      <div />
    </NativeBaseProvider>
  );
}

export default App;
