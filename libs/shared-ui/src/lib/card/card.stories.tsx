import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Card } from './card';

const props = {};

storiesOf('Card', module).add('Primary', () => <Card {...props} />);
