import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Artwork, ArtworkState} from '../types.ts/artwork';

const initialState: ArtworkState = {
  artworks: [],
  favoriteArtworks: [],
  nextPageUrl: '',
};

const reducers = {
  getArtwork: () => undefined,
  setArtwork: (state: ArtworkState, action: PayloadAction<Artwork[]>) => ({
    ...state,
    artworks: action.payload,
  }),
  getMoreArtwork: () => undefined,
  setNextUrl: (state: ArtworkState, action: PayloadAction<string>) => ({
    ...state,
    nextPageUrl: action.payload,
  }),
  addToFavorite: (state: ArtworkState, action: PayloadAction<Artwork>) => ({
    ...state,
    favoriteArtworks: [...state.favoriteArtworks, action.payload],
  }),
  removeFromFavorite: (state: ArtworkState, action: PayloadAction<number>) => ({
    ...state,
    favoriteArtworks: state.favoriteArtworks.filter(
      artwork => artwork.id !== action.payload,
    ),
  }),
};

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers,
});

export default artworkSlice.actions;

export const artworkReducer = artworkSlice.reducer;
