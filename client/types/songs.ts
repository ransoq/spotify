export interface IComment {
  _id: string;
  username: string;
  text: string;
}

export interface ISong {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[] | [];
}

export interface SongState {
  songs: ISong[];
  error: string;
}

export enum SongActionTypes {
  FETCH_SONGS = 'FETCH_SONGS',
  FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR',
}

interface FetchSongAction {
  type: SongActionTypes.FETCH_SONGS;
  payload: ISong[];
}

interface FetchSongErrorAction {
  type: SongActionTypes.FETCH_SONGS_ERROR;
  payload: string;
}

export type SongAction = FetchSongAction | FetchSongErrorAction