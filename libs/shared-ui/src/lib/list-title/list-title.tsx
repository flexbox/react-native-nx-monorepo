import React from 'react';
import { Text } from 'native-base';

export interface ListTitleProps {
  title: string;
}

export function ListTitle({ title }: ListTitleProps) {
  return (
    <Text variant="h4" mx={6} mt={3} mb={1.5}>
      {title}
    </Text>
  );
}

export default ListTitle;
