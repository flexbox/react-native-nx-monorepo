import { Button, NativeBaseProvider } from 'native-base';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <NativeBaseProvider>
      <NxWelcome title="web" />
      <Button>Hello Native Base</Button>
      <div />
    </NativeBaseProvider>
  );
}

export default App;
