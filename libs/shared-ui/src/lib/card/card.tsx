import React from 'react';
import type { ReactNode } from 'react';
import { Flex } from 'native-base';
import { ListTitle } from '@react-native-nx-monorepo/shared-ui';

interface CardProps {
  children: ReactNode;
  title?: string;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <>
      {title && <ListTitle title={title} />}
      <Flex p={4} m={2} borderRadius="3xl" shadow={4} backgroundColor="white">
        {children}
      </Flex>
    </>
  );
};
