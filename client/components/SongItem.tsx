import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import { ISong } from '../types/songs';
import { Grid, Card, IconButton } from '@material-ui/core';
import { PlayArrow, Pause, Delete } from '@material-ui/icons';

import styles from '../styles/SongItem.module.scss';
import { useActions } from '../hooks/useActions';

interface SongItemProps {
  track: ISong;
  active?: boolean;
}

const SongItem: FC<SongItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playSong, setActive } = useActions();

  const play = (event) => {
    event.stopPropagation();
    setActive(track);
    playSong();
  };

  return (
    <Card className={styles.song} onClick={() => router.push('songs/' + track._id)}>
      <IconButton onClick={play}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <img width={50} height={50} src={'http://localhost:5000/' + track.picture} alt='cover' />
      <Grid container direction='column' style={{ width: 100, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:52 / 03: 22</div>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default SongItem;