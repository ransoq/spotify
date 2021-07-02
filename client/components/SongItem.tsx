import { FC } from 'react';
import { ISong } from '../types/songs';

interface SongItemProps {
  track: ISong;
  active?: boolean;
}

const SongItem: FC<SongItemProps> = ({ track, active = false }) => {
  return (
    <div>
      {track.name}
    </div>
  );
};

export default SongItem;