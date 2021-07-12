import { FC, ChangeEvent, useEffect } from 'react';
import { Grid, Card, IconButton } from '@material-ui/core';
import { VolumeUp, PlayArrow, Pause, Delete } from '@material-ui/icons';

import SongProgress from './SongProgress';
import { ISong } from '../types/songs';
import styles from '../styles/Player.module.scss';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

let audio;

const Player: FC = () => {
  const { pause, active, currentTime, duration, volume } = useTypedSelector((state) => state.player);
  const {
    playSong,
    pauseSong,
    setVolume,
    setDuration,
    setCurrentTime,
    setActive,
  } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      toggleMusic();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio = new Audio();
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration((Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const toggleMusic = () => {
    if (pause) {
      playSong();
      audio.play();
    } else {
      pauseSong();
      audio.pause();
    }
  };

  const changeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(event.target.value) / 100;
    setVolume(Number(event.target.value));
  };

  const changeCurrentTime = (event: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(event.target.value);
    setCurrentTime(Number(event.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={toggleMusic}>
        {!pause
          ? <Pause />
          : <PlayArrow />
        }
      </IconButton>
      <Grid container direction='column' style={{ width: 100, margin: '0 20px' }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
      </Grid>
      <SongProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <SongProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;