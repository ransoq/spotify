import { FC, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import { ISong } from '../../types/songs';
import { useInput } from '../../hooks/useInput';

const SongPage = ({ serverTrack }) => {
    const [song, setSong] = useState(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const comment = useInput('');

    const addComment = async () => {
      try {
        const response = await axios.post('http://localhost:5000/tracks/comment', {
          username: username.value,
          text: comment.value,
          trackId: song._id,
        });
        setSong({ ...song, comments: [...song.comments, response.data] });
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <MainLayout>
        <Button variant='outlined' style={{ fontSize: 32 }} onClick={() => router.push('/songs')}>
          All songs
        </Button>
        <Grid container style={{ margin: '20px 0' }}>
          <img src={`http://localhost:5000/${song.picture}`} width={200} height={200} />
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
            style={{ marginBottom: 15 }}
            {...username}
          />
          <TextField
            label='Comment'
            fullWidth
            multiline
            rows={4}
            style={{ marginBottom: 15 }}
            {...comment}
          />
          <Button
            onClick={addComment}
            color='primary'
            variant="contained"
            style={{ marginBottom: 15 }}
          >Comment</Button>
        </Grid>
        <div>
          {song.comments.map(comment =>
            <div>
              <h4>{comment.username}</h4>
              <p>{comment.text}</p>
            </div>,
          )}
        </div>
      </MainLayout>
    );
  }
;

export default SongPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};