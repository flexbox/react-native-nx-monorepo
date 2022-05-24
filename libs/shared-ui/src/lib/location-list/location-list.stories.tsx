import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { LocationList } from './location-list';

const props = {};

storiesOf('LocationList', module).add('Primary', () => (
  <LocationList {...props} />
));
