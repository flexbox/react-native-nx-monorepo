import { NativeBaseProvider } from 'native-base';
import NxWelcome from './nx-welcome';
import {
  AnalyticsChart,
  LocationList,
  Tabs,
} from '@react-native-nx-monorepo/shared-ui';
import getMonth from 'date-fns/getMonth';

export function App() {
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
      <Tabs />
      <AnalyticsChart data={DUMMY_DATA} />
      <LocationList />
      <NxWelcome title="web" />
    </NativeBaseProvider>
  );
}

export default App;
