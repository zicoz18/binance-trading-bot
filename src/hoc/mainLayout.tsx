import React from 'react';
import { Container } from 'react-bootstrap';


const MainLayout = (props: any) => {
  return (
    <Container >
      {props.children}
    </Container>
  );
}

export default MainLayout;