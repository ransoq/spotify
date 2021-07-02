import { FC } from 'react';
import { Button, Card, Grid, Box } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

import SongList from '../../components/SongList';
import MainLayout from '../../layouts/MainLayout';
import { ISong } from '../../types/songs';

const Songs: FC = () => {
  const router = useRouter();
  const songs: ISong[] = [
    {
      _id: '1',
      name: 'Song 1',
      artist: 'Singer 1',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:5000/audio/8023fca1-ce6e-49bd-a3db-4544dc3dab79.mp3',
      picture: 'http://localhost:5000/image/a398fec9-d62f-442f-b8a7-276b17bb1840.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Song 2',
      artist: 'Singer 2',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:5000/audio/8023fca1-ce6e-49bd-a3db-4544dc3dab79.mp3',
      picture: 'http://localhost:5000/image/a398fec9-d62f-442f-b8a7-276b17bb1840.jpg',
      comments: [],
    },
    {
      _id: '3',
      name: 'Song 3',
      artist: 'Singer 3',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:5000/audio/8023fca1-ce6e-49bd-a3db-4544dc3dab79.mp3',
      picture: 'http://localhost:5000/image/a398fec9-d62f-442f-b8a7-276b17bb1840.jpg',
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 1080 }}>
          <Box p={10}>
            < Grid container justifyContent='space-between'>
              <h1>Songs list</h1>
              <Button onClick={() => router.push('/songs/create')}>Upload</Button>
            </Grid>
          </Box>
          <SongList tracks={songs} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Songs;