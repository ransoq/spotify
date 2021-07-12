import { FC } from 'react';

interface SongProgressProps {
  left: number;
  right: number;
  onChange: (event) => void;
}

const SongProgress: FC<SongProgressProps> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type='range'
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>{left} / {right}</div>
    </div>
  );
};

export default SongProgress;