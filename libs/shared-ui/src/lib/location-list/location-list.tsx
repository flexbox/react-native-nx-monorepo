import React from 'react';
import { Text } from 'react-native';

import { Button } from 'native-base';
import { Card } from '@react-native-nx-monorepo/shared-ui';

const ALL_LOCATIONS = [
  {
    title: 'United CU',
    distance: '9.3 mi',
    adress: '1204 South Business 54',
    town: 'Fulton, MO 65251',
  },
  {
    title: 'River Region CU',
    distance: '9.5 mi',
    adress: 'River Region CU',
    town: 'River Region CU',
  },
  {
    title: 'United CU',
    distance: '10.1 mi',
    adress: '1204 South Business 54',
    town: 'Fulton, MO 65251',
  },
];

export const LocationList = () => {
  return (
    <>
      {ALL_LOCATIONS.map((location, index) => (
        <Card key={`location${index}`}>
          <Text>{location.title}</Text>
          <Text>{location.distance}</Text>
          <Text>{location.adress}</Text>
          <Text>{location.town}</Text>
          <Button>Show directions</Button>
        </Card>
      ))}
    </>
  );
};
