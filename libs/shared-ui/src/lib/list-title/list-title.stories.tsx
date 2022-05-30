import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ListTitle } from './list-title';

const props = {};

storiesOf('ListTitle', module).add('Primary', () => <ListTitle {...props} />);
