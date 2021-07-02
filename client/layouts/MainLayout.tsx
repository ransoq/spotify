import { FC } from 'react';

import { Container } from '@material-ui/core';

import Navbar from '../components/Navbar';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '90px auto'}}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;