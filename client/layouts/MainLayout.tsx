import { FC } from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

import Player from '../components/Player';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Spotify'}</title>
        <meta name='description' content={'Music platform' || description} />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords || 'Music'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;