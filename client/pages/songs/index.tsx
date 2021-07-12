import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button, Card, Grid, Box, TextField } from '@material-ui/core';

import SongList from '../../components/SongList';
import MainLayout from '../../layouts/MainLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { wrapper, NextThunkDispatch } from '../../store';
import { fetchSongs, searchTracks } from '../../store/actions-creators/song';
import { useDispatch } from 'react-redux';

const Index: FC = () => {
  const router = useRouter();
  const { songs, error } = useTypedSelector(state => state.song);
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(event.target.value));
      }, 500),
    );
  };

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 1080 }}>
          <Box p={10}>
            <Grid container justifyContent='space-between'>
              <h1>Songs list</h1>
              <Button onClick={() => router.push('/songs/create')}>Upload</Button>
            </Grid>
          </Box>
          <TextField
            value={query}
            onChange={search}
          />
          <SongList tracks={songs} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchSongs());
});