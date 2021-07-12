import { PlayerAction, PlayerActionTypes } from '../../types/player';
import { ISong } from '../../types/songs';


export const playSong = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY };
};

export const pauseSong = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE };
};

export const setDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload };
};

export const setVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const setActive = (payload: ISong): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload };
};