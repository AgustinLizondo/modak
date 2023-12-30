import {call, put, select, takeLatest} from 'redux-saga/effects';

import artworkActions from '../slices/artworkSlice';
import {
  getArtworksService,
  getMoreArtworkService,
} from '../../services/artwork.ts';
import {ArtworkState} from '../types.ts/artwork.ts';

function* getArtwork() {
  try {
    const {data} = yield call(getArtworksService);
    yield put(artworkActions.setNextUrl(data.pagination.next_url));
    yield put(artworkActions.setArtwork(data.data));
  } catch (error) {
    console.warn(error);
  }
}

function* getMoreArtwork() {
  const getNextPageUrl = (state: ArtworkState) => state;
  const {artwork} = yield select(getNextPageUrl);
  try {
    const {data} = yield call(getMoreArtworkService, artwork.nextPageUrl);
    yield put(artworkActions.setNextUrl(data.pagination.next_url));
    yield put(artworkActions.setArtwork([...artwork.artworks, ...data.data]));
  } catch (error) {
    console.warn(error);
  }
}

export default function* artworkSagas() {
  yield takeLatest(artworkActions.getArtwork, getArtwork);
  yield takeLatest(artworkActions.getMoreArtwork, getMoreArtwork);
}
