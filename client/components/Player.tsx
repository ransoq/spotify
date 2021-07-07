import { FC } from 'react';
import { Grid, Card, IconButton } from '@material-ui/core';
import { VolumeUp, PlayArrow, Pause, Delete } from '@material-ui/icons';

import SongProgress from './SongProgress';
import { ISong } from '../types/songs';
import styles from '../styles/Player.module.scss';

const Player: FC = () => {
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
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction='column' style={{ width: 100, margin: '0 20px' }}>
        <div>{song.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{song.artist}</div>
      </Grid>
      <SongProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <SongProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;