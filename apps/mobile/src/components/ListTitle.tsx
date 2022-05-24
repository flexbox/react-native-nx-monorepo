import React from 'react';
import { Text } from 'native-base';

export const ListTitle = ({ title }: { title: string }) => {
  return (
    <Text variant="h4" mx={6} mt={3} mb={1.5}>
      {title}
    </Text>
  );
};
