import { SongAction, SongActionTypes, SongState } from '../../types/songs';

const initialState: SongState = {
  songs: [],
  error: '',
};

export const songReducer = (state = initialState, action: SongAction): SongState => {
  switch (action.type) {
    case SongActionTypes.FETCH_SONGS:
      return {
        error: '',
        songs: action.payload,
      };
    case SongActionTypes.FETCH_SONGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};