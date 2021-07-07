import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import { ISong } from '../../types/songs';

const SongPage = () => {
    const song: ISong =
      {
        _id: '1',
        name: 'Song 1',
        artist: 'Singer 1',
        text: 'Some text',
        listens: 5,
        audio: 'http://localhost:5000/audio/8023fca1-ce6e-49bd-a3db-4544dc3dab79.mp3',
        picture: 'http://localhost:5000/image/a398fec9-d62f-442f-b8a7-276b17bb1840.jpg',
        comments: [],
      };

    const router = useRouter();

    return (
      <MainLayout>
        <Button variant='outlined' style={{ fontSize: 32 }} onClick={() => router.push('/songs')}>
          All songs
        </Button>
        <Grid container style={{ margin: '20px 0' }}>
          <img src={song.picture} width={200} height={200} />
          <div style={{ marginLeft: 30 }}>
            < h1> {song.name}</h1>
            <h1>{song.artist}</h1>
            <h1>{song.listens}</h1>
          </div>
        </Grid>
        <h1>Lyrics</h1>
        <p>{song.text}</p>
        <h1>Comments</h1>
        <Grid container>
          <TextField
            label='Your name'
            fullWidth
          />
          <TextField
            label='Comment'
            fullWidth
            multiline
            rows={4}
          />
          <Button>Comment</Button>
        </Grid>
        <div>
          {song.comments.map(comment =>
            <div>
              <div>{comment.username}</div>
              <div>{comment.text}</div>
            </div>,
          )}
        </div>
      </MainLayout>
    );
  }
;

export default SongPage;