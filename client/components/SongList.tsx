import { FC } from 'react';
import { Grid, Box } from '@material-ui/core';

import { ISong } from '../types/songs';
import SongItem from './SongItem';

interface SongListProps {
  tracks: ISong[];
}

const SongList: FC<SongListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track =>
          <SongItem
            key={track._id}
            track={track}
          />
        )}
      </Box>
    </Grid>
  );
};

export default SongList;