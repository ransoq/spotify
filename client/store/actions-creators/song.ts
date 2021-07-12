import axios from 'axios';
import { Dispatch } from 'react';

import { SongAction, SongActionTypes } from '../../types/songs';

export const fetchSongs = () => {
  return async (dispatch: Dispatch<SongAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch({ type: SongActionTypes.FETCH_SONGS, payload: response.data });
    } catch (e) {
      dispatch({
        type: SongActionTypes.FETCH_SONGS_ERROR,
        payload: 'Something went wrong while fetching songs',
      });
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<SongAction>) => {
    try {
      const response = await axios.get(`http://localhost:5000/tracks/search?query=${query}`);
      dispatch({ type: SongActionTypes.FETCH_SONGS, payload: response.data });
    } catch (e) {
      dispatch({
        type: SongActionTypes.FETCH_SONGS_ERROR,
        payload: 'Something went wrong while fetching songs',
      });
    }
  };
};