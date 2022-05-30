import { Button, Row } from 'native-base';
import React from 'react';

export function Tabs() {
  return (
    <Row>
      <Button>Credit Union</Button>
      <Button>Shared</Button>
      <Button>ATM</Button>
    </Row>
  );
}

export default Tabs;
